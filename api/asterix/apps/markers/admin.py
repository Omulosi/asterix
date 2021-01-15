"""Markers admin."""

from django.contrib.gis import admin

from asterix.apps.markers.models.marker import Marker

@admin.register(Marker)
class MarkerAdmin(admin.OSMGeoAdmin):
    """Marker admin."""

    list_display = ("name", "location")