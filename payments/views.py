from rest_framework import generics, permissions
from drf_api2.permissions import IsOwnerOrReadOnly
from .models import Payment
from .serializers import PaymentSerializers


class PaymentList(generics.ListCreateAPIView):
    """
    List all payments or create a payment if authenticated.
    """
    serializer_class = PaymentSerializers
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Payment.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PaymentDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = PaymentSerializers
    queryset = Payment.objects.all()
