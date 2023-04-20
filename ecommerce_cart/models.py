import decimal
from django.db import models

from django.utils.translation import ugettext_lazy as _
from django.core.validators import RegexValidator
# Create your models here.


class WhisList(models.Model):
	"""
	WhisList Model
	"""
	customer = models.ForeignKey(
		'user_profile.Customer', on_delete=models.CASCADE, related_name='customer_whislist_items', blank=True, null=True)

	product = models.ForeignKey(
		'products.Product', on_delete=models.CASCADE, related_name='product_in_whislist', blank=True, null=True)

	ref_code = models.CharField(max_length=20,unique=True)
	is_carted = models.BooleanField(default=False)
	date_ordered = models.DateTimeField(auto_now=True)
	
	whislist_total = models.DecimalField(default=0.00, max_digits=20, decimal_places=2)

	class Meta:
		app_label = 'ecommerce_cart'

	def __str__(self):
		return '{0} - {1}'.format(self.customer, self.ref_code)

	def save(self, *args, **kwargs):
		"""
		Save Function For WhisList Model
		"""
		try:
			if self.product:
				self.whislist_total = self.product.product_price
			else:
				self.whislist_total = 0
		except WhisList.product.RelatedObjectDoesNotExist:
			self.whislist_total = 0

		super(WhisList, self).save(*args, **kwargs)
		


class CartItems(models.Model):
	"""
	Cart Items Model
	"""
	customer = models.ForeignKey(
		'user_profile.Customer', on_delete=models.CASCADE, related_name='customer_cart_items', blank=True, null=True)

	product = models.ForeignKey(
		'products.Product', on_delete=models.CASCADE, related_name='product_in_cart', blank=True, null=True)

	extra_charge = models.DecimalField(default=0.00, max_digits=20, decimal_places=2)

	cart_total = models.DecimalField(default=0.00, max_digits=20, decimal_places=2)
    
	is_ordered = models.BooleanField(default=False)

	ref_code = models.CharField(max_length=20,unique=True)

	def save(self, *args, **kwargs):
		"""
		Save Function For CartItems Model
		"""
		try:
			if self.product:
				self.cart_total = decimal.Decimal(self.product.product_price) + decimal.Decimal(self.extra_charge)
			else:
				self.cart_total = 0
		except CartItems.product.RelatedObjectDoesNotExist:
			self.cart_total = 0

		super(CartItems, self).save(*args, **kwargs)


class Address(models.Model):
	"""
	Shipping Address Model
	"""
	customer = models.ForeignKey(
		'user_profile.Customer', on_delete=models.CASCADE, related_name='user_shipping_address', blank=True, null=True)
	first_name = models.CharField(max_length=200, null=True)
	last_name = models.CharField(max_length=200, null=True)
	address_line_1 = models.CharField(max_length=255, blank=True, null=True)
	address_line_2 = models.CharField(max_length=255, blank=True, null=True)
	city = models.CharField(max_length=200, null=True)
	state = models.CharField(max_length=200, blank=True, null=True)
	country = models.CharField(max_length=200, blank=True, null=True)
	postcode = models.CharField(_("Post/Zip-code"), max_length=64)
	phone_regex = RegexValidator(
	    regex=r'^\+?1?\d{6,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
	# validators should be a list
	phone_no = models.CharField(
	    validators=[phone_regex], max_length=17)
	email = models.EmailField(max_length=200, null=True)
	notes = models.TextField(blank=True, null=True)

	def __str__(self):
		return '{0} - {1}'.format(self.customer, self.address_line_1)


class AppliedAddress(models.Model):
	"""
	Applied Address
	"""
	customer = models.OneToOneField(
		'user_profile.Customer', on_delete=models.CASCADE, related_name='user_checkout', blank=True, null=True)
	address = models.ForeignKey(
		Address, on_delete=models.CASCADE, related_name='checkout_address')

	def __str__(self):
		return str(self.customer)
	
class UserOrders(models.Model):
    """
    User Order Model
    """
    order_id = models.CharField(max_length=200, unique=True,null=True)
    customer = models.ForeignKey(
        'user_profile.Customer', on_delete=models.CASCADE, related_name='user_order', blank=True, null=True)
    date_ordered = models.DateTimeField(auto_now=True)
    address = models.ForeignKey(
        Address, on_delete=models.CASCADE, related_name='user_order_address', null=True)
    products = models.ManyToManyField(
        CartItems, related_name='user_order_stock', blank=True)

    grand_total = models.DecimalField(
        default=0.00, max_digits=19, decimal_places=2, null=True)

    is_guest_user = models.BooleanField(default=False)

    def __str__(self):
	    return '{0} - {1}'.format(self.customer, self.order_id)
    

class UserProducts(models.Model):
	"""
	User Products Model For Product Analytics
	"""
	customer = models.ForeignKey(
		'user_profile.Customer', on_delete=models.CASCADE, related_name='user_stock', blank=True, null=True)
	product = models.ForeignKey(
		'products.Product', on_delete=models.CASCADE, related_name='user_product', blank=True, null=True)
	product_quantity = models.IntegerField(default=0)

	grand_total = models.DecimalField(
	    default=0.00, max_digits=19, decimal_places=2, null=True)

	def __str__(self):
		return '{0} - {1}'.format(self.customer, str(self.product))