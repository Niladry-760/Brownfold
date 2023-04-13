from django.shortcuts import render
from django.db import transaction
from django.contrib import messages
from django.http import HttpResponseRedirect

from user_profile.models import *
from ecommerce_cart.models import *
from ecommerce_cart.extras import *
from products.models import *

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

        product.base_price = product.product_price
        product.save()

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


    with transaction.atomic():

        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()

        add_item = CartItems.objects.create(
            product=product, customer=customer, ref_code=generate_order_id(), cart_total=product.product_price)

        add_item.save()

    messages.success(
        request, 'Selected Product is successfully added to cart')

    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))