from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from drf_api2.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListAPIView):
    """
    List all profiles
    No Create view (post), as profile creation handled by django signals
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update a profile if you're the owner.
    """
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
