"""Markers admin."""

from django.contrib.gis import admin
from django.contrib import admin as n_admin
from leaflet.admin import LeafletGeoAdmin

from asterix.apps.markers.models import Marker
from asterix.apps.markers.models.county import County


@admin.register(Marker)
class MarkerAdmin(admin.OSMGeoAdmin):
    """Marker admin."""

    list_display = ("name", "location")


class CountyAdmin(LeafletGeoAdmin):
    list_display = ('name', 'city_code')
    search_fields = ('name', )
    filter_fields = ('name', 'city_code')


n_admin.site.register(County, CountyAdmin)
