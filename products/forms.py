"""
Forms
"""
from django import forms
from django.db.models import Q
from django.core.exceptions import ValidationError
from django.forms import inlineformset_factory

from .models import *



class ProductCategoryForm(forms.ModelForm):
    """
    Product Category Form
    """
    class Meta:
        model = ProductCategory
        fields = ('name',)

    def __init__(self, *args, **kwargs):
        super(ProductCategoryForm, self).__init__(*args, **kwargs)

        self.fields['name'].widget.attrs = {'class': 'form-control', 'placeholder' : "Enter Product Category Name"}
        

# class ProductTagForm(forms.ModelForm):
#     """
#     Product Tags Form
#     """
#     class Meta:
#         model = ProductTags
#         fields = ('name',)

#     def __init__(self, *args, **kwargs):
#         super(ProductTagForm, self).__init__(*args, **kwargs)

#         self.fields['name'].widget.attrs = {'class': 'form-control', 'placeholder' : "Enter Product Tag Name"}



class ProductsForm(forms.ModelForm):
    """
    Product From
    """
    class Meta:
        model = Product
        fields = ('name','category','image_1','image_2','image_3','content_1','content_2','content_3','product_price','original_file')

    def __init__(self, *args, **kwargs):
        super(ProductsForm, self).__init__(*args, **kwargs)

        self.fields['name'].widget.attrs = {'class': 'form-control', 'placeholder' : "Enter Product Name"}
        self.fields['category'].widget.attrs = {'class': 'select2_demo_2 form-control',}
        
        
        self.fields['product_price'].widget.attrs = {'class': 'form-control', 'placeholder' : "Enter MRP Price"}


        self.fields['image_1'].widget.attrs = {'class': 'form-control',}
        self.fields['image_2'].widget.attrs = {'class': 'form-control',}
        self.fields['image_3'].widget.attrs = {'class': 'form-control',}
        self.fields['original_file'].widget.attrs = {'class': 'form-control',}


    def clean_name(self):
        """
        Clean function to raise Validation Error if Product Name already exist in a company.
        """
        name = self.cleaned_data['name']
        master_id = 0

        if self.instance:
            # master id is used to exclude current master so that it is not checked as duplicate
            master_id = self.instance.id

        if Product.objects.filter(name__iexact=name).exclude(id=master_id).exists():
            raise forms.ValidationError("This Product already exists!")
        return name