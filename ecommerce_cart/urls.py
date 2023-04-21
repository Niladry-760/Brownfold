"""
Urls
"""
from django.conf.urls import url
from . import views

app_name = 'ecommerce_cart'

urlpatterns = [
    url(r'^whislist/$', views.whislist_view, name='whislist_view'),

    url(r'^add-to-whislist/(?P<product_id>[-\w]+)/$',
        views.add_to_whislist, name="add_to_whislist"),

    url(r'^add-to-cart/(?P<product_id>[-\w]+)/$',
        views.add_to_cart, name="add_to_cart"),

    url(r'^remove-from-cart/(?P<item_id>[-\w]+)/$',
        views.delete_from_cart, name="remove-from-cart"),

    url(r'^checkout/$', views.check_out_address, name='check_out_address'),

    url(r'^checkout/confirm/$', views.checkout_confirm_page, name='checkout_confirm_page'),

    url(r'^cart/page/$', views.cart_view, name='cart_view'),

    url(r'^cart/add/ajax/$', views.add_to_cart_ajax, name='add_to_cart_ajax'),


    ##### Admin Urls #####

    url(r'^orders_list/admin/$',
        views.UserOrderListAdminView.as_view(), name='orders_list_admin'),

    url(r'^orders/(?P<user_order_pk>\d+)/admin/$',
        views.OrderDetailView.as_view(), name='orders_details_admin'),
]