from django.conf import settings
import random
import string
from datetime import date
import datetime

def generate_order_id():
    date_str = date.today().strftime('%Y%m%d')[2:] + str(datetime.datetime.now().second)
    rand_str = "".join([random.choice(string.digits) for count in range(3)])
    order_id = date_str[:4] + '-' + rand_str
    return order_id

def get_client_ip(request):
	x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
	if x_forwarded_for:
		ip = x_forwarded_for.split(',')[-1].strip()
	elif request.META.get('HTTP_X_REAL_IP'):
		ip = request.META.get('HTTP_X_REAL_IP')
	else:
		ip = request.META.get('REMOTE_ADDR')
	return ip