from django.urls import include, path, re_path
# from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from talented_app import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'talents', views.TalentViewSet)
router.register(r'sports', views.SportViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# urlpatterns +=(settings.STATIC_URL, document_root=settings.STATIC_ROOT)