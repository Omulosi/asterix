from rest_framework.routers import DefaultRouter

from .views import marker_views


router = DefaultRouter()
router.register('markers', marker_views.MarkerViewSet, basename="markers")

urlpatterns = router.urls
