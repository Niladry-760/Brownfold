from django.contrib import admin

from .models import *
# Register your models here.


admin.site.register(QueryFromContact)
admin.site.register(QueryFromCall)
admin.site.register(PeriodSelected)