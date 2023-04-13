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
]