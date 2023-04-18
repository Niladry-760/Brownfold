from django import forms
from .models import QueryFromContact, QueryFromCall

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


class QueryFromCallForm(forms.ModelForm):
    """
    Call User Query Form
    """
    def __init__(self, *args, **kwargs):
        super(QueryFromCallForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs = {
            'class': 'form-control', 'id' : 'name', \
                'placeholder': 'Enter name*',}
        self.fields['email'].widget.attrs = {
            'class': 'form-control', 'id' : 'email', \
                'placeholder': 'Enter email ID*',}
        self.fields['project_desc'].widget.attrs = {
            'class': 'form-control', 'id' : 'subject', \
                'placeholder': 'Enter Project Descriptions',}
        self.fields['message'].widget.attrs = {
            'class': 'form-control', 'id' : 'message','placeholder': 'Enter message',}

    class Meta:
        model = QueryFromCall
        fields = [ 'name', 'email', 'project_desc','message']