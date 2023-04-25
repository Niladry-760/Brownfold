from django.shortcuts import render, redirect
from django.urls import reverse
from django.db import transaction
from django.contrib import messages
from django.http import HttpResponseRedirect, JsonResponse
from django.template.loader import render_to_string
from django.db.models import Sum, Value, Count, FloatField, IntegerField
from django.views.generic import ListView, DetailView
from django.db.models.functions import Coalesce

from user_profile.models import *
from ecommerce_cart.models import *
from ecommerce_cart.extras import *
from products.models import *
from ecommerce_cart.forms import *

from app.common import *
# Create your views here.

def whislist_view(request):
    """
    WhisList View
    """
    try:
        device = request.COOKIES['device']
    except KeyError as error:
        device = None
    except Exception as exception:
        device = None

    customer = Customer.objects.filter(device=device).first()
    if not customer:
        created = Customer.objects.create(device=device)
        created.save()

    existing_orders = WhisList.objects.filter(
        customer=customer, is_carted=False)  # Getting Items in Cart


    context = {
        'existing_orders' : existing_orders,
    }
    return CommonMixin.render(request, 'whislist.html', context)


def add_to_whislist(request, **kwargs):
    """
    Add To Whislist View
    """
    product = Product.objects.filter(id=kwargs.get('product_id', "")).first()


    # if int(total_quantity) <= 0:
    #     messages.error(
    #         request, 'The Selected Product is Out Of Stock!')
    #     return HttpResponseRedirect(request.META.get("HTTP_REFERER"))

    try:
        device = request.COOKIES['device']
    except KeyError as error:
        print(error)
        device = None
    except Exception as exception:
        print(exception)
        device = None


    with transaction.atomic():

        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()


        add_item = WhisList.objects.create(
            product=product, customer=customer, ref_code=generate_order_id(), is_carted=False)

        product.whislist_items.add(customer)
        product.save()

        add_item.save()

    messages.success(
        request, 'Selected Product is successfully added to wishlist')

    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))


def remove_from_whislist(request, **kwargs):
    """
    Remove From Whislist View
    """
    product = Product.objects.filter(id=kwargs.get('product_id', "")).first()

    try:
        device = request.COOKIES['device']
    except KeyError as error:
        print(error)
        device = None
    except Exception as exception:
        print(exception)
        device = None


    with transaction.atomic():

        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()


        WhisList.objects.filter(
            product=product, customer=customer).delete()

        product.whislist_items.remove(customer)
        product.save()

    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))


def add_to_cart(request, **kwargs):
    """
    Add To Cart View
    """
    product = Product.objects.filter(id=kwargs.get('product_id', "")).first()

    try:
        device = request.COOKIES['device']
    except KeyError as error:
        device = None
    except Exception as exception:
        device = None

    extra_charge = request.GET.get('extra_charge', 0)

    with transaction.atomic():

        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()

        add_item = CartItems.objects.create(
            product=product, customer=customer, ref_code=generate_order_id(), extra_charge=extra_charge)

        add_item.save()

    messages.success(
        request, 'Selected Product is successfully added to cart')

    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))


def delete_from_cart(request, item_id):
    """
    Delete One Item From Cart
    """
    item_to_delete = CartItems.objects.filter(pk=item_id)
    if item_to_delete.exists():
        item_to_delete[0].delete()
        messages.success(
            request, 'Selected Product is successfully removed from cart')
    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))


def check_out_address(request):
    """
    Check Out View
    """

    try:
        device = request.COOKIES['device']
    except KeyError as error:
        device = None
    except Exception as exception:
        device = None

    customer = Customer.objects.filter(device=device).first()
    if not customer:
        created = Customer.objects.create(device=device)
        created.save()

    if request.method == 'POST':
        address_form = AddressForm(request.POST or None)
        if address_form.is_valid():
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            state = request.POST.get('state')
            country = request.POST.get('country')
            phone_no = request.POST.get('phone_no')
            email = request.POST.get('email')
            notes = request.POST.get('notes')


            answer = Address.objects.create(customer=customer, first_name=first_name, last_name=last_name,\
                                             state=state, phone_no=phone_no, \
                                                country=country, email=email, notes=notes)
            check_out = AppliedAddress.objects.create(
                customer=customer, address=answer)

            answer.save()

            check_out.save()

            messages.success(request, 'Address Applied Successfully')
            return redirect(reverse('ecommerce_cart:checkout_confirm_page'))
    else:
        address_form = AddressForm()

    context = {
        'form' : address_form
    }
    return CommonMixin.render(request, "check_out_address.html", context)


def checkout_confirm_page(request):
    """
    Checkout Confirm Page
    """
    try:
        device = request.COOKIES['device']
    except KeyError as error:
        device = None
    except Exception as exception:
        device = None

    customer = Customer.objects.filter(device=device).first()
    if not customer:
        created = Customer.objects.create(device=device)
        created.save()
    
    applied_address = AppliedAddress.objects.filter(customer=customer).first()

    context = {
        'applied_address' : applied_address
    }
    return CommonMixin.render(request, "check_out_confirm.html", context)


def cart_view(request):
    """
    Cart Page
    """
    try:
        device = request.COOKIES['device']
    except KeyError as error:
        device = None
    except Exception as exception:
        device = None

    customer = Customer.objects.filter(device=device).first()
    if not customer:
        created = Customer.objects.create(device=device)
        created.save()
    

    context = {}
    return CommonMixin.render(request, "cart.html", context)


def add_to_cart_ajax(request):
    """
    Add to Cart Ajax View
    """
    extra_charge = request.GET.get('extra_charge', 0)
    product_id = request.GET.get('product_id', 0)

    try:
        device = request.COOKIES['device']
    except KeyError as error:
        device = None
    except Exception as exception:
        device = None

    with transaction.atomic():

        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()

        add_item = CartItems.objects.create(
            product_id=product_id, customer=customer, ref_code=generate_order_id(), extra_charge=extra_charge)

        add_item.save()

    cart_items = CartItems.objects.filter(
            customer=customer, is_ordered=False)
    
    cart_total = cart_items.aggregate(
            the_sum=Coalesce(Sum('cart_total'), Value(0), output_field=IntegerField()))['the_sum']

    cart_count = cart_items.aggregate(
        the_sum=Coalesce(Count('id'), Value(0), output_field=FloatField()))['the_sum']  # Cart Item Count

    messages.success(
        request, 'Selected Product is successfully added to cart')
    
    context = {
        'customer' : customer,
        'cart_total' : cart_total,
        'cart_items' : cart_items,
        'cart_count' : cart_count
    }
    if request.is_ajax():
        html = render_to_string('cart_ajax.html',
                                context, request=request)

    data = {
        'html' : html
    }
    return JsonResponse(data)


def remove_from_whislist_ajax(request):
    """
    Remove From Whislist Ajax
    """
    product_id = request.GET.get('product_id', 0)

    try:
        device = request.COOKIES['device']
    except KeyError as error:
        print(error)
        device = None
    except Exception as exception:
        print(exception)
        device = None

    with transaction.atomic():

        product = Product.objects.filter(id=product_id).first()

        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()

        WhisList.objects.filter(
            product=product, customer=customer).delete()

        product.whislist_items.remove(customer)
        product.save()

    cart_items = CartItems.objects.filter(
            customer=customer, is_ordered=False)
    
    cart_total = cart_items.aggregate(
            the_sum=Coalesce(Sum('cart_total'), Value(0), output_field=IntegerField()))['the_sum']

    cart_count = cart_items.aggregate(
        the_sum=Coalesce(Count('id'), Value(0), output_field=FloatField()))['the_sum']  # Cart Item Count
    
    existing_orders = WhisList.objects.filter(
        customer=customer, is_carted=False)  # Getting Items in Cart
    
    context = {
        'existing_orders' : existing_orders,
        'customer' : customer,
        'cart_total' : cart_total,
        'cart_items' : cart_items,
        'cart_count' : cart_count
    }
    html = render_to_string('whislist_ajax_list.html',
                            context, request=request)
    
    data = {
        'html' : html
    }
    return JsonResponse(data)


############################# Admin Templates ##############################


class UserOrderListAdminView(CommonMixin, ListView):
    """
    User Order Admin List
    """
    model = UserOrders
    context_object_name = "order_list"
    template_name = "admin_templates/order_list_admin.html"
    paginate_by = 15

    def get_queryset(self):
        return self.model.objects.all().order_by('-id')


class OrderDetailView(DetailView):
    """
    Order Detail View
    """
    context_object_name = 'orders'
    model = UserOrders
    template_name = "admin_templates/order_details_admin.html"

    def get_object(self):
        orders = UserOrders.objects.filter(
            pk=self.kwargs['user_order_pk']).first()
        return orders