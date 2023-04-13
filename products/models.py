from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

from django.utils.text import slugify

# Create your models here.

class ProductCategory(models.Model):
    """
    Product Category Model
    """
    name = models.CharField(max_length=200)
    slug = models.SlugField(
		max_length=200, unique=True, null=True, blank=True)

    def __str__(self) -> str:
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(ProductCategory, self).save(*args, **kwargs)

class Product(models.Model):
    """
    Product Model
    """
    name = models.CharField(max_length=200)
    category = models.ForeignKey(
		ProductCategory, on_delete=models.CASCADE, related_name='products', null=True)
    image_1 = models.ImageField(
        upload_to='product/product_image_1', null=True, blank=True)
    image_2 = models.ImageField(
        upload_to='product/product_image_2', null=True, blank=True)
    image_3 = models.ImageField(
        upload_to='product/product_image_3', null=True, blank=True)
    content_1 = RichTextUploadingField(
		blank=True, null=True, config_name='special')
    content_2 = RichTextUploadingField(
		blank=True, null=True, config_name='special')
    content_3 = RichTextUploadingField(
		blank=True, null=True, config_name='special')
    product_price = models.DecimalField(default=0.00, max_digits=20, decimal_places=2)
    slug = models.SlugField(
        max_length=200, unique=True, null=True, blank=True)
    
    whislist_items = models.ManyToManyField(
		  'user_profile.Customer', related_name='whislist_items', blank=True)

    def __str__(self) -> str:
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)


