"""
Common mixin and decorators
"""
from django.views import generic
from django.shortcuts import render
from django.db.models import Sum, Value, Count, FloatField, IntegerField
from django.db.models.functions import Coalesce

from ecommerce_cart.models import CartItems
from user_profile.models import Customer


class CommonMixin(generic.base.ContextMixin):
    """
    Common Mixin (used for footer elements)
    """
    @staticmethod
    def update_common_context(context, cookies):
        """
        Updates Common context for footer elements
        """
        device = cookies
        customer = Customer.objects.filter(device=device).first()
        if not customer:
            created = Customer.objects.create(device=device)
            created.save()

        context['customer'] = customer


        context['cart_items'] = CartItems.objects.filter(
            customer=customer, is_ordered=False)

        context['cart_total'] = context['cart_items'].aggregate(
            the_sum=Coalesce(Sum('cart_total'), Value(0), output_field=IntegerField()))['the_sum']

        context['cart_count'] = context['cart_items'].aggregate(
            the_sum=Coalesce(Count('id'), Value(0), output_field=FloatField()))['the_sum']  # Cart Item Count


    def get_context_data(self, **kwargs):
        context = super(CommonMixin, self).get_context_data(**kwargs)

        try:
            device_cookie = self.request.COOKIES['device']
        except KeyError as error: 
            device_cookie = None
        except Exception as exception:
            device_cookie = None

        if device_cookie is not None:
            CommonMixin.update_common_context(context, device_cookie)
        else:
            CommonMixin.update_common_context(context, None)
        return context

    @staticmethod
    def render(request, template, context):
        """
        Updates common context and render using the template supplied(Mainly used for Function-Based Views)
        """
        try:
            device_cookie = request.COOKIES['device']
        except KeyError as error:
            device_cookie = None
        except Exception as exception:
            device_cookie = None

        if device_cookie is not None:
            CommonMixin.update_common_context(context, device_cookie)
        else:
            CommonMixin.update_common_context(context, None)
        return render(request, template, context)