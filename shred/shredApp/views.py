from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import CurrentTripSerializer, UserSerializer
from .models import *


def index(request):
    return HttpResponse("Hello, world. You're at the shred index.")

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class CurrentTripView(viewsets.ModelViewSet):
    serializer_class = CurrentTripSerializer
    queryset = CurrentTrip.objects.all()
