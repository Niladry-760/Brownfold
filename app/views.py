from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib import messages

from .forms import QueryFromContactForm
from .models import QueryFromContact
# Create your views here.


def index(request):
    return render(request, 'index.html')


def contact_us_view(request):   
    """
    Contact Us View
    """
    if request.method == "POST":
        query_form = QueryFromContactForm(request.POST or None)
        if query_form.is_valid():
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            answer = QueryFromContact.objects.create(name=name, email=email,message=message)
            answer.save()
            #send_contact_message_query_mail(contact=answer)
            messages.success(request, 'Your message succesfully sent!')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
    else:
        query_form = QueryFromContactForm()


    context = {
        'form' : query_form,
    }
    return render(request, "contact_us.html", context)


def privacy_policy(request):
    """
    Privacy Policy Page
    """
    return render(request, 'privacy_policy.html')


def terms_conditions(request):
    """
    Terms and Condition Page
    """
    return render(request, 'terms_conditions.html')