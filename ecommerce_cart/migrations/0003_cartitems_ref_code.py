# Generated by Django 3.2 on 2023-04-13 01:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce_cart', '0002_cartitems_is_ordered'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartitems',
            name='ref_code',
            field=models.CharField(default='1', max_length=20, unique=True),
            preserve_default=False,
        ),
    ]