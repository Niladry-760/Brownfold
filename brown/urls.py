"""brown URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from django.conf.urls import url, include

from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', views.index, name='index'),
    path('contact-us', views.contact_us_view, name='contact_us'),

    path('privacy-policy', views.privacy_policy, name='privacy_policy'),

    path('terms-and-conditions', views.terms_conditions, name='terms_conditions'),

    url(r'^ckeditor/', include('ckeditor_uploader.urls')),

    url(r"^our-products/", include("products.urls", namespace="product")),

    url(r"^ecommerce/", include("ecommerce_cart.urls", namespace="ecommerce_cart")),

    url(r"^blogs/", include("blog.urls", namespace="blog")),


    path('superadmin/', views.admin_index, name='admin_index'),
    url(r'^superadmin/contact-query/$', views.contact_query_view, name="contact_query"),
	url(r'^superadmin/contact-query/delete/(?P<query_pk>\d+)/$',
        views.delete_query, name='query_delete'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
