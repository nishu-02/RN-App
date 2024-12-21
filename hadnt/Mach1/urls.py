from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
     path('Mach1/', views.index, name='Mach1'),
]
