from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.db.models import Q
from django.views.decorators.cache import cache_page
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from app.common import CommonMixin
from products.models import Product

from .models import BlogCategories, Blog, BlogComments, BlogTags
from .forms import BlogCommentsForm
# Create your views here.


class BlogListView(CommonMixin, ListView):
    """
    Blog List View
    """
    model = Blog
    context_object_name = 'blog_list'
    template_name = 'blog_list.html'
    paginate_by = 6

    def get_queryset(self):
        return self.model.objects.all().order_by('-id')

    def get_context_data(self, **kwargs):
        context = super(BlogListView, self).get_context_data(**kwargs)

        context['blog_categories'] = BlogCategories.objects.all().order_by('title')
        context['latest_blogs'] = Blog.objects.all().order_by('id')[:3]
        context['blog_tags'] = BlogTags.objects.all().order_by('id')

        return context

@cache_page(60 * 15)
def blog_details_view(request, blog_slug):
    """
    Blog Details View
    """
    blog_details = Blog.objects.filter(slug=blog_slug).first()

    blog_categories = BlogCategories.objects.all().order_by('title')

    comment_list = BlogComments.objects.filter(
        blog=blog_details).order_by('-id')[:10]

    tag_list = BlogTags.objects.all().order_by('-id')

    recent_blogs = Blog.objects.all().order_by('-id')[:3]

    related_blogs = Blog.objects.filter(category=blog_details.category).exclude(
        id=blog_details.id)[:2]

    recent_comments = BlogComments.objects.all().order_by('-id')[:3]

    if request.method == "POST":
        comment_form = BlogCommentsForm(request.POST or None)
        if comment_form.is_valid():
            name = request.POST.get('name')
            email = request.POST.get('email')
            comment = request.POST.get('comment')
            answer = BlogComments.objects.create(
                name=name, email=email, comment=comment, blog=blog_details)
            answer.save()
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
    else:
        comment_form = BlogCommentsForm()

    product_list = Product.objects.all().order_by('id')[:5]

    context = {

        'blog_details': blog_details,
        'comment_list': comment_list,
        'blog_categories': blog_categories,
        'form': comment_form,
        'tag_list': tag_list,
        'related_blogs' : related_blogs,
        'recent_blogs': recent_blogs,
        'recent_comments': recent_comments,
        'product_list' : product_list
    }
    return CommonMixin.render(request, 'blog_details.html', context)

@cache_page(60 * 15)
def blog_categories_details(request, blog_category_slug):
    """
    Blog Category detail view
    """
    category_details = BlogCategories.objects.filter(
        slug=blog_category_slug).first()

    blogs = Blog.objects.filter(category=category_details).order_by('-id')

    page = request.GET.get('page', 1)

    paginator = Paginator(blogs, 6)
    try:
        blog_list = paginator.page(page)
    except PageNotAnInteger:
        blog_list = paginator.page(1)
    except EmptyPage:
        blog_list = paginator.page(paginator.num_pages)

    blog_categories = BlogCategories.objects.all().exclude(
        id=category_details.id).order_by('title')

    latest_blogs = Blog.objects.all().order_by('id')[:3]

    blog_tags = BlogTags.objects.all().order_by('id')

    context = {
        'category_details': category_details,
        'blog_list': blog_list,
        'blog_categories': blog_categories,
        'latest_blogs': latest_blogs,
        'blog_tags': blog_tags
    }
    return CommonMixin.render(request, 'blog_category_details.html', context)

@cache_page(60 * 15)
def blog_tag_details(request, blog_tag_slug):
    """
    Blog Tag Detail View
    """
    blog_tag_details = BlogTags.objects.filter(slug=blog_tag_slug).first()

    blog_list = blog_tag_details.blog_tags.all()

    page = request.GET.get('page', 1)

    paginator = Paginator(blog_list, 6)
    try:
        blogs = paginator.page(page)
    except PageNotAnInteger:
        blogs = paginator.page(1)
    except EmptyPage:
        blogs = paginator.page(paginator.num_pages)

    blog_categories = BlogCategories.objects.all().order_by('title')
    latest_blogs = Blog.objects.all().order_by('id')[:3]
    blog_tags = BlogTags.objects.all().exclude(
        id=blog_tag_details.id).order_by('id')

    context = {

        'blog_tag_details': blog_tag_details,
        'blog_list': blogs,
        'blog_categories': blog_categories,
        'latest_blogs': latest_blogs,
        'blog_tags': blog_tags
    }
    return CommonMixin.render(request, 'blog_tag_details.html', context)


def search(request):
    """
    Search View
    """
    template = 'search_blog_list.html'

    query = request.GET.get('q')

    if query:
        result = Blog.objects.filter(Q(blog_title__icontains=query) | Q(
            description__icontains=query) | Q(category__title__icontains=query))
    else:
        result = Blog.objects.none()

    page = request.GET.get('page', 1)

    paginator = Paginator(result, 6)
    try:
        blogs = paginator.page(page)
    except PageNotAnInteger:
        blogs = paginator.page(1)
    except EmptyPage:
        blogs = paginator.page(paginator.num_pages)

    blog_categories = BlogCategories.objects.all().order_by('title')
    latest_blogs = Blog.objects.all().order_by('id')[:3]
    blog_tags = BlogTags.objects.all().order_by('id')

    context = {
        'search_result': query,
        'blog_list': blogs,
        'blog_categories': blog_categories,
        'latest_blogs': latest_blogs,
        'blog_tags': blog_tags
    }

    return CommonMixin.render(request, template, context)
