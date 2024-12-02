from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def index (request):
    # return HttpResponse("Index Mach 1", content_type="text/plain")
    data = {
        "name": "Nishant",
        "message": "I wish I was acquiring wisdom at less of a price",
        "image": 'https://images.unsplash.com/photo-1604079617229-d72e65c41043',

    }

    return JsonResponse(data) # returns a JSON response
