from django import forms
from .models import QueryFromContact

class QueryFromContactForm(forms.ModelForm):
    """
    Contact Us User Query Form
    """
    def __init__(self, *args, **kwargs):
        super(QueryFromContactForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs = {
            'class': 'form-control', 'id' : 'feedbackform-name', \
                'placeholder': 'Your Full Name*',}
        self.fields['email'].widget.attrs = {
            'class': 'form-control', 'id' : 'feedbackform-email', \
                'placeholder': 'Email Address*',}
        self.fields['message'].widget.attrs = {
            'rows' : '4', 'cols' : '100' ,'class': 'form-control', 'id' : 'feedbackform-message',}

    class Meta:
        model = QueryFromContact
        fields = [ 'name', 'email','message']