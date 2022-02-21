import email
from statistics import mode
from weakref import ReferenceType
from django.db import models

# Create your models here.


class users(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    riding = models.CharField(max_length=50)
    stance = models.CharField(max_length=50)


class current_trip(models.Model):
    location = models.CharField(max_length=50)
    airbnb = models.CharField(max_length=50)
    airbnb = models.CharField(max_length=50)
