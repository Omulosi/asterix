# Generated by Django 2.2.16 on 2021-01-19 11:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('markers', '0006_county_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='county',
            name='created',
        ),
    ]