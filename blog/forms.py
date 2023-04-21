"""
Forms
"""
from django import forms

from blog.models import BlogCategories, Blog, BlogComments, BlogTags

class DateInput(forms.DateInput):
    """
    Widgets support for date input
    """
    input_type = 'date'

class BlogCategoriesForm(forms.ModelForm):
    """
    Blog Category Form
    """
    class Meta:
        model = BlogCategories
        fields = ['title']

    def __init__(self, *args, **kwargs):
        super(BlogCategoriesForm, self).__init__(*args, **kwargs)
        self.fields['title'].widget.attrs = {
            'class' : 'form-control','placeholder' : 'Blog Category Name', }


class BlogForm(forms.ModelForm):
    """
    Blog Forms
    """
    class Meta:
        model = Blog
        fields = ['blog_title','description','blog_image','category','tags','post_date']
        widgets = {
            'post_date': DateInput(),
        }

    def __init__(self, *args, **kwargs):
        super(BlogForm, self).__init__(*args, **kwargs)
        self.fields['blog_title'].widget.attrs = {
            'class' : 'form-control','placeholder' : 'Blog Title', }
        self.fields['blog_image'].widget.attrs = {
            'class' : 'form-control',}
        self.fields['category'].widget.attrs = {
            'class': 'select2_demo_2 form-control', }
        self.fields['tags'].widget.attrs = {
            'class': 'select2_demo_3 form-control','multiple' : 'multiple', }
        self.fields['post_date'].widget.attrs = {
            'class' : 'form-control',}

class BlogTagsForm(forms.ModelForm):
    """
    Blog Tags Form
    """
    class Meta:
        model = BlogTags
        fields = ['name']

    def __init__(self, *args, **kwargs):
        super(BlogTagsForm, self).__init__(*args, **kwargs)

        self.fields['name'].widget.attrs = {
            'class' : 'form-control','placeholder' : 'Blog Tag Name', }


class BlogCommentsForm(forms.ModelForm):
    """
    BlogComments Form
    """
    class Meta:
        model = BlogComments
        fields = ['name', 'comment']
