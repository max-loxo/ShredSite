from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "riding", "stance")


class TripsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = ("location", "airbnb")
