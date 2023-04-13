from django import forms
from .models import Address

class AddressForm(forms.ModelForm):
    """
    Checkout Address Form
    """
    def __init__(self, *args, **kwargs):
        super(AddressForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs = {
            'class': 'form-control', 'id' : 'checkoutform-user_first_name', \
                'placeholder': 'Your First Name*',}
        self.fields['last_name'].widget.attrs = {
            'class': 'form-control', 'id' : 'checkoutform-user_last_name', \
                'placeholder': 'Your Last Name*',}
        self.fields['phone_no'].widget.attrs = {
            'class': 'form-control', 'id' : 'checkoutform-user_phone_number', \
                'placeholder': 'Your Phone Number*',}
        self.fields['email'].widget.attrs = {
            'class': 'form-control', 'id' : 'checkoutform-user_email', \
                'placeholder': 'Your Email ID*',}
        self.fields['state'].widget.attrs = {
            'class': 'form-control', 'id' : 'checkoutform-name_on_cv', \
                'placeholder': 'Your State*',}
        self.fields['country'].widget.attrs = {
            'class': 'form-control', 'id' : 'checkoutform-country', \
                'placeholder': 'Your State*',}
        self.fields['notes'].widget.attrs = {
            'rows' : '4', 'cols' : '100' ,'class': 'form-control', 'id' : 'checkoutform-notes',}

    class Meta:
        model = Address
        fields = [ 'first_name', 'last_name','phone_no','email','state','country','notes']