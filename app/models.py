from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

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