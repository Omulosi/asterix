# Generated by Django 2.2.16 on 2021-01-22 10:40

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('markers', '0008_delete_county'),
    ]

    operations = [
        migrations.AddField(
            model_name='marker',
            name='properties',
            field=jsonfield.fields.JSONField(blank=True, null=True),
        ),
    ]
