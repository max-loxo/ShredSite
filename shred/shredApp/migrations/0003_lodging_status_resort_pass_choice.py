# Generated by Django 4.0.2 on 2022-02-26 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shredApp', '0002_lodging_resort_trips_delete_currenttrip_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lodging',
            name='status',
            field=models.CharField(choices=[('PND', 'PENDING'), ('CHSN', 'CHOSEN')], default='PND', max_length=4),
        ),
        migrations.AddField(
            model_name='resort',
            name='pass_choice',
            field=models.CharField(choices=[('EPC', 'EPIC'), ('IKN', 'ICON')], default='EPC', max_length=3),
        ),
    ]