from PIL import Image
import sys
import os
from io import BytesIO

from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField
from django.core.files.uploadedfile import InMemoryUploadedFile
# Create your models here.


class BlogTags(models.Model):
    """
    Blog Tags Model
    """
    name = models.CharField(max_length=200)
    slug = models.SlugField(
        max_length=200, unique=True, null=True, blank=True)

    class Meta:
        app_label = 'blog'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(BlogTags, self).save(*args, **kwargs)


class BlogCategories(models.Model):
    """
    Blog Categories
    """
    title = models.CharField(max_length=40, default='Uncategorized')
    slug = models.SlugField(
        max_length=200, unique=True, null=True, blank=True)

    class Meta:
        app_label = 'blog'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        """
        Returns absolute url for a blog categories
        """
        return reverse("blog:blog_category_details", kwargs={'blog_category_slug': self.slug})

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(BlogCategories, self).save(*args, **kwargs)


class Blog(models.Model):
    """
    Blog Model
    """
    date = models.DateTimeField(auto_now_add=True)
    post_date = models.DateField(blank=True)
    blog_title = models.CharField(max_length=255, unique=True)
    description = RichTextUploadingField(
        blank=True, null=True, config_name='special')
    blog_image = models.ImageField(
        upload_to='blog_image', null=True, blank=True, help_text='Image Size 450 x 277')
    category = models.ForeignKey(
        BlogCategories, on_delete=models.CASCADE, related_name='blogs')
    tags = models.ManyToManyField(
        BlogTags, related_name='blog_tags', blank=True)
    slug = models.SlugField(
        max_length=255, unique=True, null=True, blank=True)

    class Meta:
        app_label = 'blog'

    def __str__(self):
        return self.blog_title

    def get_absolute_url(self):
        """
        Returns absolute url for a blog categories
        """
        return reverse("blog:blogdetail", kwargs={'blog_slug': self.slug})

    def save(self, *args, **kwargs):
        self.slug = slugify(self.blog_title)

        if self.blog_image:
            temp_image = Image.open(self.blog_image).convert('RGB')
            output_io_stream = BytesIO()
            temp_resized_image = temp_image.resize((800, 800))
            temp_resized_image.save(
                output_io_stream, format='JPEG', quality=90)
            output_io_stream.seek(0)
            self.blog_image = InMemoryUploadedFile(output_io_stream,
                                                    'ImageField', "%s.jpg" % self.blog_image.name.split('.')[0], 'image/jpeg', sys.getsizeof(output_io_stream), None)

        super(Blog, self).save(*args, **kwargs)


class BlogComments(models.Model):
    """
    Blog Comments Model
    """ 
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    comment = models.TextField()
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='blogs_comment')


    class Meta:
        app_label = 'blog'

    def __str__(self):
        return self.name
