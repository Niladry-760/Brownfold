"""
Urls
"""
from django.conf.urls import url
from . import views, views_admin

app_name = 'products'

urlpatterns = [

    url(r'^list/$',views.all_product_list, name='all_product_list'),
    url(r'^category_wise_product/$',views.search_product_category_wise, name='search_product_category_wise'),

    url(r'^category_product_details/(?P<category_slug>[\w-]+)/$',
        views.product_category_details_view, name='product_category_details'),

    url(r'^(?P<product_slug>[\w-]+)/$',
        views.product_details_view, name='product_detail'),


    ##################### Views Admin #################################

    ######### Product Categories Url  ##################
    # url(r'^category/category-list/$',
    #     views_admin.AllCategoryListView.as_view(), name='category_list'),


    url(r'^product-category/admin/$',
        views_admin.ProductCategoryListView.as_view(), name='category_list'),

    url(r'^product-category/admin/create/$',
        views_admin.ProductCategoryCreateView.as_view(), name='category_create'),

    url(r'^product-category/(?P<category_pk>\d+)/admin/update/$',
        views_admin.ProductCategoryUpdateView.as_view(), name='category_update'),

    url(r'^product-category/(?P<category_pk>\d+)/admin/delete/$',
        views_admin.category_delete_view, name='category_delete'),

    ######### Product Url  ##################

    url(r'^product/admin/$',
        views_admin.ProductsListView.as_view(), name='product_list_admin'),

    url(r'^product/admin/create/$',
        views_admin.ProductCreateView.as_view(), name='product_create'),

    url(r'^product/(?P<product_slug>[\w-]+)/admin/update/$',
        views_admin.ProductUpdateView.as_view(), name='product_update'),

    url(r'^product/(?P<product_slug>[\w-]+)/admin/details/$',
        views_admin.product_details_view, name='product_details_admin'),

    url(r'^product/(?P<product_pk>\d+)/admin/delete/$',
        views_admin.delete_product, name='product_delete'),

]