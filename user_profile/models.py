from PIL import Image
import sys
import os
from io import BytesIO

from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.validators import URLValidator, RegexValidator
from django.core.files.uploadedfile import InMemoryUploadedFile

#from ecommerce_cart.models import CartItems


from app.models import CountryMaster, StateMaster
# Create your models here.

class Profile(models.Model):
	"""
	Profile Model
	"""
	date = models.DateTimeField(auto_now_add=True)
	full_name = models.CharField(max_length=32, blank=True)
	
	date_of_birth = models.DateField(blank=True, null=True)

	user_types = (
		('ADMIN', 'ADMIN'),
		('CUSTOMER', 'CUSTOMER')
	)
	user_type = models.CharField(
		max_length=32, choices=user_types, default='CUSTOMER', blank=False)
	user = models.OneToOneField(
		settings.AUTH_USER_MODEL, related_name='profile', on_delete=models.CASCADE)
	email = models.EmailField(max_length=70, unique=True)
	permanent_address = models.TextField(blank=True)
	city = models.CharField(max_length=100, blank=True)
	state = models.ForeignKey(StateMaster, related_name="profile_state",
	                      on_delete=models.DO_NOTHING, null=True, blank=True)

	pin_code = models.CharField(max_length=32, blank=True)

	country = models.ForeignKey(CountryMaster, related_name="profile_country",
	                        on_delete=models.DO_NOTHING, null=True, blank=True)
	phone_regex = RegexValidator(regex=r'^\+?1?\d{6,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
	phone_no = models.CharField(validators=[phone_regex], max_length=17, blank=True, null=True) # validators should be a list
	basic_info = models.TextField(blank=True)
	image = models.ImageField(upload_to='user_images', null=True, blank=True)

	class Meta:
		app_label = 'user_profile'

	def __str__(self):
		return str(self.user)

	# def get_user_items_in_cart(self):
	# 	"""
	# 	Function to calculate user items present in cart
	# 	"""
	# 	user_items = CartItems.objects.filter(customer__user=self.user, is_ordered=False)

	# 	return user_items

	# def get_user_items_in_cart_count(self):
	# 	"""
	# 	Function to calculate user items present in cart
	# 	"""
	# 	user_items = CartItems.objects.filter(customer__user=self.user, is_ordered=False)

	# 	item_count = user_items.aggregate(
    #         partial_total=Count('id'))['partial_total']

	# 	return item_count

	def save(self, *args, **kwargs):
		"""
		Save Funtion to override the size and resolution of Profile Image
		"""
		if self.image:
			temp_image = Image.open(self.image).convert('RGB')
			output_stream = BytesIO()
			temp_resized_image = temp_image.resize((480, 480))
			temp_resized_image.save(output_stream, format='JPEG', quality=60)
			output_stream.seek(0)
			self.image = InMemoryUploadedFile(
			    output_stream,
			    'ImageField',
			    "%s.jpg" % self.image.name.split(
			        '.')[0],  # need revision for file name
			    'image/jpeg',
			    sys.getsizeof(output_stream),
			    None)

		super(Profile, self).save(*args, **kwargs)


class Customer(models.Model):
	"""
	Customer Model (if user is loged in then register by user otherwise register via device)
	"""
	user = models.OneToOneField(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE, related_name='user_customer')
	name = models.CharField(max_length=200, null=True, blank=True)
	email = models.CharField(max_length=200, null=True, blank=True)
	device = models.CharField(max_length=200, null=True, blank=True)

	def __str__(self):
		if self.name:
			name = self.name
		else:
			name = self.device
		return str(name)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
# sender, instance, created, **kwargs
def create_user_on_profile_create(instance, created, **kwargs):
    """
    Signal to create a Profile whenever a user Registers.
    """
    Profile.objects.update_or_create(user=instance, defaults={
                                     'email': instance.email,})