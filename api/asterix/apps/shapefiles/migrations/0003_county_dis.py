# Generated by Django 2.2.16 on 2021-01-19 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shapefiles', '0002_load_county_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='county',
            name='dis',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
