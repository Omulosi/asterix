# Generated by Django 2.2.16 on 2021-01-19 12:43

from django.db import migrations

from django.contrib.gis.utils import LayerMapping
from ..models import County
from django.db import migrations
from .. import loader


def load_data(apps, shema_editor):
    loader.run()


class Migration(migrations.Migration):

    dependencies = [
        ('shapefiles', '0001_initial'),
    ]

    operations = [migrations.RunPython(load_data)]