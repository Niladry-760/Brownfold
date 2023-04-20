from django.shortcuts import render, redirect
from django.db.models import Q
from django.db import transaction
from django.urls import reverse
from django.http import JsonResponse
from django.contrib import messages
from django.template.loader import render_to_string
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView


from app.common import CommonMixin

from .models import ProductCategory, Product
from .forms import ProductCategoryForm, ProductsForm


########################### All Views For Metronics Admin Templates #############################

############################## Product Category Admin Views ##################

class ProductCategoryListView(CommonMixin, ListView):
    """
    Product Category List View
    """
    model = ProductCategory
    context_object_name = 'category_list'
    template_name = 'product_admin/category_list.html'
    paginate_by = 15

    # def get(self, request, *args, **kwargs):
    # # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))

    #     return super().get(request, *args, **kwargs)

    def get_queryset(self):
        category_list = ProductCategory.objects.all().order_by('id')
        return category_list

class ProductCategoryCreateView(CommonMixin, CreateView):
    """
    Product Category Create View
    """
    form_class = ProductCategoryForm
    template_name = 'product_admin/category_form.html'

    # def get(self, request, *args, **kwargs):
    # # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))

    #     return super().get(request, *args, **kwargs)

    def get_success_url(self, **kwargs):
        return reverse('product:category_list')

class ProductCategoryUpdateView(CommonMixin, UpdateView):
    """
    Product Category Update View
    """
    model = ProductCategory
    form_class = ProductCategoryForm
    template_name = 'product_admin/category_form.html'

    # def get(self, request, *args, **kwargs):
    # # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))

    #     return super().get(request, *args, **kwargs)

    def get_success_url(self, **kwargs):
        return reverse('product:category_list')

    def get_object(self):
        category_details = ProductCategory.objects.filter(pk=self.kwargs['category_pk']).first()
        return category_details


def category_delete_view(request, category_pk):
    """
    Delete Category View
    """

    # try:
    #     if not request.user.is_superuser:
    #         messages.error(request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
    # except AttributeError as error:
    #     messages.error(request, 'You have no permission to access the requested resource!')
    #     return redirect(reverse('index'))

    category_details = ProductCategory.objects.filter(pk=category_pk).first()

    products = Product.objects.filter(category=category_details)

    for item in products:
        item.delete()

    category_details.delete()

    messages.success(
        request, 'Category Deleted Successfully')

    return redirect(reverse('product:category_list'))



############################## Product Admin Views ##################

class ProductsListView(CommonMixin, ListView):
    """
    Product List View
    """
    model = Product
    context_object_name = 'product_list'
    template_name = 'product_admin/product_list.html'
    paginate_by = 15

    # def get(self, request, *args, **kwargs):
    # # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))

    #     return super().get(request, *args, **kwargs)

    def get_queryset(self):
        product_list = Product.objects.all().order_by('id')
        return product_list

class ProductCreateView(CommonMixin, CreateView):
    """
    Product Create View
    """
    form_class = ProductsForm
    template_name = 'product_admin/product_form.html'

    # def get(self, request, *args, **kwargs):
    # # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))

    #     return super().get(request, *args, **kwargs)

    def get_success_url(self, **kwargs):
        return reverse('product:product_details_admin', kwargs={'product_slug' : self.object.slug})
    

class ProductUpdateView(LoginRequiredMixin, CommonMixin, UpdateView):
    """
    Product Update View
    """
    model = Product
    form_class = ProductsForm
    template_name = 'product_admin/product_form.html'

    # def get(self, request, *args, **kwargs):
    # # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))

    #     return super().get(request, *args, **kwargs)

    def get_success_url(self, **kwargs):
        return reverse('product:product_details_admin', kwargs={'product_slug' : self.object.slug})

    def get_object(self):
        product_details = Product.objects.filter(slug=self.kwargs['product_slug']).first()
        return product_details


def product_details_view(request, product_slug):
    """
    Product Details View
    """
    # try:
    #     if not request.user.is_superuser:
    #         messages.error(request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
    # except AttributeError as error:
    #     messages.error(request, 'You have no permission to access the requested resource!')
    #     return redirect(reverse('index'))


    product_details = Product.objects.filter(slug=product_slug).first()

    context =  {
        'product_details' : product_details
    }
    return CommonMixin.render(request, 'product_admin/product_details.html', context)


def delete_product(request, product_pk):
    """
    Delete Product
    """
    # try:
    #     if not request.user.is_superuser:
    #         messages.error(request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
    # except AttributeError as error:
    #     messages.error(request, 'You have no permission to access the requested resource!')
    #     return redirect(reverse('index'))
        
    product_details = Product.objects.filter(pk=product_pk).first()

    product_details.delete()

    messages.success(
        request, 'Product Deleted Successfully')

    return redirect(reverse('product:product_list'))