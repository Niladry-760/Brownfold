"""
Urls
"""
from django.conf.urls import url
from . import views

app_name = 'products'

urlpatterns = [

    url(r'^list/$',views.all_product_list, name='all_product_list'),
    url(r'^category_wise_product/$',views.search_product_category_wise, name='search_product_category_wise'),

    url(r'^category_product_details/(?P<category_slug>[\w-]+)/$',
        views.product_category_details_view, name='product_category_details'),

    url(r'^(?P<product_slug>[\w-]+)/$',
        views.product_details_view, name='product_detail'),

]