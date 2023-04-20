from django.db import IntegrityError 
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.db.models import Q
from django.urls import reverse
from django.contrib import messages
from django.views.generic import ListView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView


from app.common import CommonMixin

from .models import BlogCategories, Blog, BlogComments, BlogTags
from .forms import BlogCategoriesForm, BlogCommentsForm, BlogForm, BlogTagsForm

################### Blog Admin View ########################################

############ Blog Categories Admin #################

class BlogCategoriesAdminListView(CommonMixin, ListView):
    """
    Blog Category List View
    """
    model = BlogCategories
    context_object_name = 'blog_category_list'
    template_name = 'blog_admin/blog_category_list.html'
    paginate_by = 15

    def get_queryset(self):
        return BlogCategories.objects.all().order_by('id')

class BlogCategoryCreateView(CommonMixin, CreateView):
    """
    Blog Category Create View
    """
    form_class = BlogCategoriesForm
    template_name = 'blog_admin/blog_category_form.html'

    def get_success_url(self, **kwargs):
        return reverse('blog:blog_category_list')


class BlogCategoryUpdateView(CommonMixin, UpdateView):
    """
    Blog Category Update View
    """
    model = BlogCategories
    form_class = BlogCategoriesForm
    template_name = 'blog_admin/blog_category_form.html'


    def get_success_url(self, **kwargs):
        return reverse('blog:blog_category_list')

    def get_object(self):
        category_details = BlogCategories.objects.filter(slug=self.kwargs['blog_category_slug']).first()
        return category_details

def blog_category_delete_view(request, blog_category_slug):
    """
    Blog Category Delele VIew
    """

    category_details = BlogCategories.objects.filter(slug=blog_category_slug).first()

    category_details.delete()

    messages.success(
        request, 'Blog Category Deleted Successfully')

    return reverse('blog:blog_category_list')


##################### Blog Admin Views #######################

class BlogListViewAdmin(CommonMixin, ListView):
    """
    Blog List View
    """
    model = Blog
    context_object_name = 'blog_list'
    template_name = 'blog_admin/blog_list.html'
    paginate_by = 15

    def get_queryset(self):
        return Blog.objects.all().order_by('id')

    
class BlogCreateView(CommonMixin, CreateView):
    """
    Blog Create View
    """
    form_class = BlogForm
    template_name = 'blog_admin/blog_form.html'

    def get_success_url(self, **kwargs):
        return reverse('blog:blog_list_admin')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(BlogCreateView, self).form_valid(form)

        
class BlogUpdateView(CommonMixin, UpdateView):
    """
    Blog Update View
    """
    model = Blog
    form_class = BlogForm
    template_name = 'blog_admin/blog_form.html'

    def get_success_url(self, **kwargs):
        return reverse('blog:blog_list_admin')

    def get_object(self):
        blog_details = Blog.objects.filter(slug=self.kwargs['blog_slug']).first()
        return blog_details

def delete_blog(request, blog_pk):
    """
    Delete Blog View
    """
    # try:
    #     if not request.user.is_superuser:
    #         messages.error(request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
    # except AttributeError as error:
    #     messages.error(request, 'You have no permission to access the requested resource!')
    #     return redirect(reverse('index'))


    blog_details = Blog.objects.filter(pk=blog_pk).first()

    blog_details.delete()

    messages.success(
        request, 'Blog Deleted Successfully')

    return reverse('blog:blog_list_admin')


################################### Blog Tags View ##############################################

class BlogTagsListView(CommonMixin, ListView):
    """
    Blog Tags List View
    """
    model = BlogTags
    context_object_name = 'blog_tag_list'
    template_name = 'blog_admin/blog_tag_list.html'
    paginate_by = 15

    # def get(self, request, *args, **kwargs):
    #     # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
            
    #     return super().get(request, *args, **kwargs)

    def get_queryset(self):
        return BlogTags.objects.all().order_by('id')

class BlogTagsCreateView(CommonMixin, CreateView):
    """
    Blog Tags Create View
    """
    form_class = BlogTagsForm
    template_name = 'blog_admin/blog_tag_create.html'

    # def get(self, request, *args, **kwargs):
    #     # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
            
    #     return super().get(request, *args, **kwargs)

    def get_success_url(self, **kwargs):
        return reverse('blog:blog_tag_list_admin')

class BlogTagUpdateView(CommonMixin, UpdateView):
    """
    Blog Update View
    """
    model = BlogTags
    form_class = BlogTagsForm
    template_name = 'blog_admin/blog_tag_create.html'

    # def get(self, request, *args, **kwargs):
    #     # checking if the user is customer
    #     try:
    #         if not self.request.user.is_superuser:
    #             messages.error(self.request, 'You have no permission to access the requested resource!')
    #             return redirect(reverse('index'))
    #     except AttributeError as error:
    #         messages.error(self.request, 'You have no permission to access the requested resource!')
    #         return redirect(reverse('index'))
            
    #     return super().get(request, *args, **kwargs)

    def get_success_url(self, **kwargs):
        return reverse('blog:blog_tag_list_admin')

    def get_object(self):
        blog_tag_details = BlogTags.objects.filter(slug=self.kwargs['blog_tag_slug']).first()
        return blog_tag_details

def delete_blog_tags(request, blog_tag_pk):
    """
    Delete Blog Tags
    """ 
    blog_tag_details = BlogTags.objects.filter(pk=blog_tag_pk).first()

    blog_tag_details.delete()

    messages.success(
        request, 'Blog Tag Deleted Successfully')

    return reverse('blog:blog_tag_list_admin')