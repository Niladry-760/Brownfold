# Generated by Django 3.2 on 2023-04-09 12:40

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image_1', models.ImageField(blank=True, null=True, upload_to='product/product_image_1')),
                ('image_2', models.ImageField(blank=True, null=True, upload_to='product/product_image_2')),
                ('image_3', models.ImageField(blank=True, null=True, upload_to='product/product_image_3')),
                ('content_1', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True)),
                ('content_2', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True)),
                ('content_3', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True)),
                ('product_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=20)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.productcategory')),
            ],
        ),
    ]
