from django.urls import path
from .views import CountyList

urlpatterns = [
    path("counties", CountyList.as_view(), name="counties"),
]
