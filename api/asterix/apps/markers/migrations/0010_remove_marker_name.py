# Generated by Django 2.2.16 on 2021-01-22 11:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('markers', '0009_marker_properties'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='marker',
            name='name',
        ),
    ]
