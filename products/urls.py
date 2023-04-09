"""
Urls
"""
from django.conf.urls import url
from . import views

app_name = 'products'

urlpatterns = [

    url(r'^list/$',views.all_product_list, name='all_product_list'),

]