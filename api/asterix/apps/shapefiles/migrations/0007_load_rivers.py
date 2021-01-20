# Generated by Django 2.2.16 on 2021-01-20 03:24

from django.db import migrations

from django.contrib.gis.utils import LayerMapping
from ..models import County
from django.db import migrations
from .. import load_kenya_roads as loader


def load_data(apps, shema_editor):
    loader.run()


class Migration(migrations.Migration):

    dependencies = [
        ('shapefiles', '0006_load_kenya_road'),
    ]

    operations = [migrations.RunPython(load_data)]