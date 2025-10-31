from rest_framework import generics, permissions
from drf_api2.permissions import IsOwnerOrReadOnly
from .models import Quote
from .serializers import QuoteSerializers


class QuoteList(generics.ListCreateAPIView):
    serializer_class = QuoteSerializers
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Quote.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class QuoteDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = QuoteSerializers
    queryset = Quote.objects.all()
