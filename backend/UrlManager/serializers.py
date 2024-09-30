from rest_framework import serializers
from .models import UrlManager

class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = UrlManager
        fields = ('url', 'created', 'lastModified')