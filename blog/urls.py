"""
Urls
"""
from django.conf.urls import url
from . import views, views_admin
from django.views.decorators.cache import cache_page

app_name = 'blog'

urlpatterns = [

    url(r'^$', cache_page(60*15)(views.BlogListView.as_view()), name='blog_list'),

    url(r'^(?P<blog_slug>[\w-]+)/$',
        views.blog_details_view, name='blogdetail'),

    url(r'^category/(?P<blog_category_slug>[\w-]+)/$',
        views.blog_categories_details, name='blog_category_details'),

    url(r'^tag/(?P<blog_tag_slug>[\w-]+)/$',
        views.blog_tag_details, name='blog_tag_details'),

    url(r'^search/item/$',
        views.search, name='search_blog'),


    #################### All ADMIN VIEWS ################################

    ############## BLOG CATEGORY VIEWS ######################

    url(r'^blog/category-list/admin/$', views_admin.BlogCategoriesAdminListView.as_view(), name='blog_category_list'),

    url(r'^blog/category-create/admin/$', views_admin.BlogCategoryCreateView.as_view(), name='blog_category_create'),

    url(r'^blog/category/(?P<blog_category_slug>[\w-]+)/update/admin/$', views_admin.BlogCategoryUpdateView.as_view(), name='blog_category_update'),

    url(r'^blog/category/(?P<blog_category_slug>[\w-]+)/delete/admin/$', views_admin.blog_category_delete_view, name='blog_category_delete'),


    ##################### Blog Views URL ##############################################

    url(r'^blog/list/admin/$', views_admin.BlogListViewAdmin.as_view(), name='blog_list_admin'),

    url(r'^blog/create/admin/$', views_admin.BlogCreateView.as_view(), name='blog_create_admin'),

    url(r'^blog/update/(?P<blog_slug>[\w-]+)/admin/$', views_admin.BlogUpdateView.as_view(), name='blog_update_admin'),

    url(r'^blog/delete/(?P<blog_pk>\d+)/admin/$', views_admin.delete_blog, name='blog_delete_admin'),


    ##################### Blog Tags URL #########################################

    url(r'^blog/tag-list/admin/$', views_admin.BlogTagsListView.as_view(), name='blog_tag_list_admin'),
    url(r'^blog/tag-create/admin/$', views_admin.BlogTagsCreateView.as_view(), name='blog_tag_create_admin'),

    url(r'^blog/tag/(?P<blog_tag_slug>[\w-]+)/update/admin/$', views_admin.BlogTagUpdateView.as_view(), name='blog_tag_update_admin'),

    url(r'^blog//tag/(?P<blog_tag_pk>\d+)/delete/admin/$', views_admin.delete_blog_tags, name='blog_tag_delete_admin'),

]
