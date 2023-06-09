# Generated by Django 3.2 on 2023-04-12 09:14

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0002_product_slug'),
        ('app', '0003_auto_20230412_0813'),
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200, null=True)),
                ('last_name', models.CharField(max_length=200, null=True)),
                ('address_line_1', models.CharField(max_length=255)),
                ('address_line_2', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(max_length=200, null=True)),
                ('postcode', models.CharField(max_length=64, verbose_name='Post/Zip-code')),
                ('phone_no', models.CharField(max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{6,15}$')])),
                ('email', models.EmailField(max_length=200, null=True)),
                ('country', models.ForeignKey(default=12, on_delete=django.db.models.deletion.CASCADE, related_name='user_shipping_country', to='app.countrymaster')),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_shipping_address', to='user_profile.customer')),
                ('state', models.ForeignKey(default=37, on_delete=django.db.models.deletion.CASCADE, related_name='user_shipping_state', to='app.statemaster')),
            ],
        ),
        migrations.CreateModel(
            name='CartItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('extra_charge', models.DecimalField(decimal_places=2, default=0.0, max_digits=20)),
                ('cart_total', models.DecimalField(decimal_places=2, default=0.0, max_digits=20)),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_cart_items', to='user_profile.customer')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_in_cart', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='WhisList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ref_code', models.CharField(max_length=20, unique=True)),
                ('is_carted', models.BooleanField(default=False)),
                ('date_ordered', models.DateTimeField(auto_now=True)),
                ('whislist_total', models.DecimalField(decimal_places=2, default=0.0, max_digits=20)),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_whislist_items', to='user_profile.customer')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_in_whislist', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='UserOrders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.CharField(max_length=200, null=True, unique=True)),
                ('date_ordered', models.DateTimeField(auto_now=True)),
                ('grand_total', models.DecimalField(decimal_places=2, default=0.0, max_digits=19, null=True)),
                ('is_guest_user', models.BooleanField(default=False)),
                ('address', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_order_address', to='ecommerce_cart.address')),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_order', to='user_profile.customer')),
                ('products', models.ManyToManyField(blank=True, related_name='user_order_stock', to='ecommerce_cart.CartItems')),
            ],
        ),
        migrations.CreateModel(
            name='AppliedAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='checkout_address', to='ecommerce_cart.address')),
                ('customer', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_checkout', to='user_profile.customer')),
            ],
        ),
    ]
