from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "riding", "stance")


class TripsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = ("location", "airbnb", "date")


class ResortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resort
        fields = ("pass_choice", "name", "base_elevation",
                  "peak_elevation", "price", "trails", "url", "image_url")


class LodgingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lodging
        fields = ("status", "name", "url",
                  "distance", "price", "image_url")
