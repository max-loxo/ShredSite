from django.db import models

# Create your models here.


class User(models.Model):
    REGULAR = 'RG'
    GOOFY = 'GF'
    STANCE_CHOICES = [
        (REGULAR, 'REGULAR'),
        (GOOFY, 'GOOFY'),
    ]
    BOARD = 'BRD'
    SKI = 'SKI'
    RIDING_CHOICES = [
        (BOARD, 'BOARD'),
        (SKI, 'SKI'),
    ]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    riding = models.CharField(
        max_length=3,
        choices=RIDING_CHOICES,
        default=BOARD,
        blank=False
    )
    stance = models.CharField(
        max_length=3,
        choices=STANCE_CHOICES,
        default=REGULAR,
        blank=False
    )


class Trips(models.Model):
    location = models.CharField(max_length=100)
    airbnb = models.CharField(max_length=5000)
    date = models.DateField()
    user = models.ManyToManyField(User)


class Resort(models.Model):
    EPIC = 'EPC'
    ICON = 'IKN'
    PASS_CHOICES = [
        (EPIC, 'EPIC'),
        (ICON, 'ICON'),
    ]
    pass_choice = models.CharField(
        max_length=3,
        choices=PASS_CHOICES,
        default=EPIC,
        blank=False
    )
    name = models.CharField(max_length=100)
    base_elevation = models.IntegerField()
    peak_elevation = models.IntegerField()
    price = models.IntegerField()
    trails = models.IntegerField()
    url = models.CharField(max_length=200)
    image_url = models.CharField(max_length=200)
    trips = models.ManyToManyField(Trips)


class Lodging(models.Model):
    PENDING = 'PND'
    CHOSEN = 'CHSN'
    STATUS_CHOICES = [
        (PENDING, 'PENDING'),
        (CHOSEN, 'CHOSEN')
    ]
    status = models.CharField(
        max_length=4,
        choices=STATUS_CHOICES,
        default=PENDING,
        blank=False
    )
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=200)
    distance = models.IntegerField()
    price = models.IntegerField()
    image_url = models.CharField(max_length=200)
    trip = models.ForeignKey(Trips, on_delete=models.CASCADE)
