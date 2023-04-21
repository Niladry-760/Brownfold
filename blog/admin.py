from django.contrib import admin

from .models import BlogCategories, Blog, BlogComments, BlogTags
# Register your models here.


class BlogAdmin(admin.ModelAdmin):
    """
    Admin for Blog
    """
    model = Blog
    list_display = ['blog_title', 'category', 'date', ]
    search_fields = ['blog_title', ]
    #readonly_fields = ('user',)


class BlogCommentAdmin(admin.ModelAdmin):
    """
    Admin for BlogComments
    """
    model = BlogComments
    list_display = ['name', 'comment', 'blog', ]
    search_fields = ['comment', ]
    #readonly_fields = ('user',)


admin.site.register(BlogTags)
admin.site.register(BlogCategories)
admin.site.register(Blog, BlogAdmin)
admin.site.register(BlogComments, BlogCommentAdmin)
