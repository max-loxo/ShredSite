from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TripsSerializer, UserSerializer
from .models import *


def index(request):
    return HttpResponse("Hello, world. You're at the shred index.")


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class TripsView(viewsets.ModelViewSet):
    serializer_class = TripsSerializer
    queryset = Trips.objects.all()
