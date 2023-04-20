import datetime
from django.db import models
from django.conf import settings
from django.utils import timezone
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

# Create your models here.


class PeriodSelected(models.Model):
    """
    Period selected by a user
    """
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name="auth_user_period", on_delete=models.CASCADE)
    start_date = models.DateField(default=timezone.now)
    end_date = models.DateField(default=timezone.now)

    def __str__(self):
        return str(self.user.username) + " [From " + str(self.start_date) + " To " + str(self.end_date) + "]"

    def clean(self):
        if self.start_date > self.end_date:
            raise ValidationError({
                'start_date': ["Start Date cannot be greater than End Date"],
                'end_date': ["End Date cannot be earlier than Start Date"]
            })

class CountryMaster(models.Model):
    """
    Country Master
    """
    country_name = models.CharField(max_length=30, unique=True)
    iso3=models.CharField('iso3',max_length=100,null=True)
    iso2=models.CharField('iso2',max_length=100,null=True)
    numeric_code=models.CharField('numeric_code',max_length=10)
    phone_code=models.CharField('phone_code',max_length=200)
    capital=models.CharField('capital',max_length=100)
    currency=models.CharField('currency',max_length=10)
    currency_name=models.CharField('currency_name',max_length=100) 
    region=models.CharField('region',max_length=60)
    subregion=models.CharField('subregion',max_length=100)
    latitude=models.DecimalField('latitude',max_digits=30,decimal_places=20)
    longitude=models.DecimalField('longitude',max_digits=30,decimal_places=20)

    def __str__(self):
        return self.country_name
    

class CountryTimezone(models.Model):
      """ 
      Country Timezone Model PMS
      """
      country_name=models.ForeignKey(CountryMaster,related_name='country_master_zones',on_delete=models.CASCADE)
      zoneName = models.CharField(max_length=255)
      gmtOffset = models.CharField(max_length=255)
      gmtOffsetName = models.CharField(max_length=255)
      abbreviation = models.CharField(max_length=255)
      tzName = models.CharField(max_length=255)

      def __str__(self):
            return self.tzName


class StateMaster(models.Model):
    """
    State Master
    """
    state_name = models.CharField(max_length=30, unique=True)
    state_code = models.CharField(max_length=2, unique=True)
    country = models.ForeignKey(CountryMaster,related_name='country_masters',on_delete=models.CASCADE)
    latitude=models.DecimalField('latitude',max_digits=30,decimal_places=20,null=True)
    longitude=models.DecimalField('longitude',max_digits=30,decimal_places=20,null=True)

    def __str__(self):
        return self.state_name
    

class QueryFromContact(models.Model):
    """
    User Query From Contact Us Page
    """
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name
    

class QueryFromCall(models.Model):
    """
    User Query From Contact Us Page
    """
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    project_desc = models.CharField(max_length=255, blank=True, null=True)
    message = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name
    


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
# sender, instance, created, **kwargs
def create_period_on_user_create(instance, created, **kwargs):
    """
    Signal to create a Period whenever a user Registers.
    """
    PeriodSelected.objects.update_or_create(user=instance, defaults={
                                     'start_date': datetime.date((datetime.datetime.now().year), 4, 1), 
                                     'end_date': datetime.date((datetime.datetime.now().year) + 1, 3, 31)})