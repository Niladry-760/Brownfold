import datetime
import collections
import dateutil
from datetime import timedelta
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.db.models import Sum, Value, Count, Avg, Case, When, F
from django.db.models.functions import Coalesce

from .forms import QueryFromContactForm, QueryFromCallForm
from .models import QueryFromContact, QueryFromCall, PeriodSelected
from .common import *

from products.models import *
from ecommerce_cart.models import *
from user_profile.models import *
# Create your views here.


def index(request):
    if request.method == "POST":
        query_form = QueryFromCallForm(request.POST or None)
        if query_form.is_valid():
            name = request.POST.get('name')
            email = request.POST.get('email')
            project_desc = request.POST.get('project_desc')
            message = request.POST.get('message')
            answer = QueryFromCall.objects.create(name=name, email=email,message=message,project_desc=project_desc)
            answer.save()
            #send_contact_message_query_mail(contact=answer)
            messages.success(request, 'Your Call Request is send successfully!')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
    else:
        query_form = QueryFromCallForm()


    context = {
        'form' : query_form,
    }
    return CommonMixin.render(request, 'index.html', context)


def contact_us_view(request):   
    """
    Contact Us View
    """
    if request.method == "POST":
        query_form = QueryFromContactForm(request.POST or None)
        if query_form.is_valid():
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            answer = QueryFromContact.objects.create(name=name, email=email,message=message)
            answer.save()
            #send_contact_message_query_mail(contact=answer)
            messages.success(request, 'Your message succesfully sent!')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
    else:
        query_form = QueryFromContactForm()


    context = {
        'form' : query_form,
    }
    return CommonMixin.render(request, "contact_us.html", context)


def privacy_policy(request):
    """
    Privacy Policy Page
    """
    context = {}
    return CommonMixin.render(request, 'privacy_policy.html', context)


def terms_conditions(request):
    """
    Terms and Condition Page
    """
    context = {}
    return CommonMixin.render(request, 'terms_conditions.html', context)


def admin_index(request):
    """
    Admin Index View
    """
    # try:
    #     if not request.user.is_superuser:
    #         messages.error(request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
    # except AttributeError as error:
    #     messages.error(request, 'You have no permission to access the requested resource!')
    #     return redirect(reverse('index'))

    period_selected = PeriodSelected.objects.all().first()

    today = datetime.datetime.now()

    last_month = today.month - 1 if today.month > 1 else 12

    life_time_sales = UserOrders.objects.all().aggregate(
        the_sum=Coalesce(Sum('grand_total'), Value(0), output_field=FloatField()))['the_sum']

    current_month_sales = UserOrders.objects.filter(date_ordered__month=today.month).aggregate(
        partial_total=Coalesce(Sum('grand_total'), Value(0), output_field=FloatField()))['partial_total']  # Sales This Month

    total_customers = Customer.objects.all().aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Total Customer Count

    total_customer_this_month = Customer.objects.filter(date__month=today.month).aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Total Customer Count Current Month

    total_customer_last_month = Customer.objects.filter(date__month=last_month).aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Total Customer Count Last Month

    life_time_orders = UserOrders.objects.all().aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Total Orders Uptil Now

    last_month_orders = UserOrders.objects.filter(date_ordered__month=last_month).aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Last Month Orders

    current_month_orders = UserOrders.objects.filter(date_ordered__month=today.month).aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Total Orders Current Month

    average_life_time_order = UserOrders.objects.all().aggregate(
        partial_total=Coalesce(Avg('grand_total'), Value(0), output_field=FloatField()))['partial_total']  # Average Of Life Time Sales

    average_last_month_orders = UserOrders.objects.filter(date_ordered__month=last_month).aggregate(
        partial_total=Coalesce(Avg('grand_total'), Value(0), output_field=FloatField()))['partial_total']  # Average Of Last Month Sales

    average_month_orders = UserOrders.objects.filter(date_ordered__month=today.month).aggregate(
        partial_total=Coalesce(Avg('grand_total'), Value(0), output_field=FloatField()))['partial_total']  # Average Of This Month Order

    Orders_in_period = UserOrders.objects.filter(date_ordered__date__gte=period_selected.start_date, date_ordered__date__lte=period_selected.end_date).aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']  # Total Order For a given date range

    if life_time_orders == 0:
        Order_in_period_rate = 0
    elif Orders_in_period == 0:
        Order_in_period_rate = 0
    else:
        Order_in_period_rate = (
            Orders_in_period / life_time_orders) * 100

    total_customers_in_period = Customer.objects.filter( date__date__gte=period_selected.start_date, date__date__lte=period_selected.end_date).aggregate(
        partial_total=Coalesce(Count('id'), Value(0), output_field=IntegerField()))['partial_total']

    if total_customers == 0:
        Customer_in_period_rate = 0
    elif total_customers_in_period == 0:
        Customer_in_period_rate = 0
    else:
        Customer_in_period_rate = (
            total_customers_in_period / total_customers) * 100

    life_time_sales_in_period = UserOrders.objects.filter(date_ordered__date__gte=period_selected.start_date, date_ordered__date__lte=period_selected.end_date).aggregate(
        partial_total=Coalesce(Sum('grand_total'), Value(0), output_field=FloatField()))['partial_total']  # Total Income From Order for a given daterange

    if life_time_sales == 0:
        sales_in_period_rate = 0
    elif life_time_sales_in_period == 0:
        sales_in_period_rate = 0
    else:
        sales_in_period_rate = (
            life_time_sales_in_period / life_time_sales) * 100

    # Graphs OF Monthly Sales In A Selected Date Range
    results = collections.OrderedDict()
    sales_inventory_result = UserOrders.objects.filter(date_ordered__gte=period_selected.start_date, date_ordered__lte=period_selected.end_date).annotate(
        real_total=Case(When(grand_total__isnull=True, then=0), default=F('grand_total'), output_field=FloatField()))

    date_cursor = period_selected.start_date

    while date_cursor < period_selected.end_date:

        total_sales = sales_inventory_result.filter(date_ordered__month=date_cursor.month, date_ordered__year=date_cursor.year).aggregate(
            partial_total=Coalesce(Sum('real_total'), Value(0), output_field=FloatField()))['partial_total']

        results[(date_cursor.month, date_cursor.year)] = [total_sales]

        from dateutil import relativedelta

        date_cursor += relativedelta.relativedelta(months=1)

    results = results.items()

    this_month = today.month

    order_list_month = UserOrders.objects.filter(date_ordered__month=this_month).order_by(
        '-id')[:5]  # Getting All Orders Current Month

    week_start = datetime.date.today()  # Getting Todays Date
    # Getting The Start Date Of the Week
    week_start -= timedelta(days=week_start.weekday())
    week_end = week_start + timedelta(days=7)  # Getting The End Date Of Week

    order_list_week = UserOrders.objects.filter(date_ordered__gte=week_start, date_ordered__lt=week_end).order_by(
        '-id')[:5]  # Getting All Orders Current Week

    order_list_day = UserOrders.objects.filter(date_ordered__year=week_start.year, date_ordered__month=week_start.month,
                                               date_ordered__day=week_start.day).order_by('-id')[:5]  # Getting All Orders In Current Day
    
    new_customers = Profile.objects.filter(
        user_type='CUSTOMER', user__is_active=True).order_by('-id')[:10]

    top_stock = Product.objects.annotate(
        total_sales=Coalesce(Sum('user_product__grand_total'), 0, output_field=FloatField()),
        quantity_sales=Coalesce(Count('user_product__id'), 0, output_field=IntegerField()),
    ).order_by('-quantity_sales')[:10]

    top_stock_total = top_stock.aggregate(
        partial_total=Sum('total_sales'))['partial_total']

    context = {
        'life_time_sales': life_time_sales,
        'current_month_sales': current_month_sales,
        'total_customers': total_customers,
        'total_customer_this_month': total_customer_this_month,
        'total_customer_last_month': total_customer_last_month,
        'life_time_orders': life_time_orders,
        'last_month_orders': last_month_orders,
        'current_month_orders': current_month_orders,
        'average_life_time_orders': average_life_time_order,
        'average_last_month_orders': average_last_month_orders,
        'average_month_orders': average_month_orders,
        'period_selected': period_selected,
        'Orders_in_period': Orders_in_period,
        'Order_in_period_rate': Order_in_period_rate,
        'total_customers_in_period': total_customers_in_period,
        'Customer_in_period_rate': Customer_in_period_rate,
        'life_time_sales_in_period': life_time_sales_in_period,
        'sales_in_period_rate': sales_in_period_rate,
        'results': results,
        'order_list_month': order_list_month,
        'order_list_week': order_list_week,
        'order_list_day': order_list_day,
        'new_customers': new_customers,
        'top_stock': top_stock,
        'top_stock_total': top_stock_total
    }
    return CommonMixin.render(request, 'metronics/index_admin.html', context)


########### Admin View ############

def contact_query_view(request):   
    """
    Contact Us Query View
    """

    query_details = QueryFromContact.objects.all()
    
    context = {
        'query_details' : query_details,
    }
    return render(request, "admin_query/contact_querty_list.html", context)


def delete_query(request, query_pk):
    """
    Delete Product
    """
    query_details = QueryFromContact.objects.filter(pk=query_pk).first()

    query_details.delete()

    messages.success(
        request, 'Contact Query Deleted Successfully')

    return redirect(reverse('contact_query'))