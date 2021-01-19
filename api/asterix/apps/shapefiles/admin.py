"""Counties admin."""

from django.contrib.gis import admin
from asterix.apps.shapefiles.models import County
from leaflet.admin import LeafletGeoAdmin


@admin.register(County)
class CountyAdmin(LeafletGeoAdmin):
    list_display = ('counties', 'cty_code')
    search_fields = ('counties', )
    filter_fields = ('counties', 'cty_code')
