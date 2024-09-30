from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UrlSerializer
from .models import UrlManager

class UrlManagerView(viewsets.ModelViewSet):
    serializer_class = UrlSerializer
    queryset = UrlManager.objects.all()