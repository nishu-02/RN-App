from django.http import HttpResponse
from django.shortcuts import render, redirect

def index(request):
    return HttpResponse("welcome to the homepage of the Project that contains the React native app as well as the website!")