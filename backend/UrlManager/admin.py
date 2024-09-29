from django.contrib import admin
from .models import UrlManager

class UrlManagerAdmin(admin.ModelAdmin):
    list_display = ('url', 'created', 'lastModified')

admin.site.register(UrlManager, UrlManagerAdmin)