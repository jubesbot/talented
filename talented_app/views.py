from django.contrib.auth.models import User
from .models import Talent, Sport
from rest_framework import viewsets
from .serializers import UserSerializer, TalentSerializer, SportSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated

@permission_classes([IsAdminUser])
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class TalentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Talent.objects.all().order_by('talent_name')
    serializer_class = TalentSerializer

class SportViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Sport.objects.all().order_by('sport')
    serializer_class = SportSerializer