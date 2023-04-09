from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


from .models import *

# Create your views here.


def all_product_list(request):
	"""
		All Product List View
	"""
	products = Product.objects.all().order_by('-id')
	
	page = request.GET.get('page', 1)

	paginator = Paginator(products, 16)
	try:
		product_list = paginator.page(page)
	except PageNotAnInteger:
		product_list = paginator.page(1)
	except EmptyPage:
		product_list = paginator.page(paginator.num_pages)

	category_list = ProductCategory.objects.all().order_by('-id')

	context = {
		'product_list' : product_list,
		'category_list' : category_list,
	}
	return render(request, 'product_list.html', context)


def product_category_details_view(request, category_slug):
	"""
	Product Category Deatils
	"""
	category_details = ProductCategory.objects.filter(slug=category_slug).first()

	products = Product.objects.filter(category=category_details).order_by('id')
	

	page = request.GET.get('page', 1)

	paginator = Paginator(products, 16)
	try:
		product_list = paginator.page(page)
	except PageNotAnInteger:
		product_list = paginator.page(1)
	except EmptyPage:
		product_list = paginator.page(paginator.num_pages)

	category_list = ProductCategory.objects.all().exclude(id=category_details.id).order_by('id')

	context = {
		'category_details' : category_details,
		'product_list' : product_list,
		'category_list' : category_list
	}
	return render(request, 'product_category_details.html', context)