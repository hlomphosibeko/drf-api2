from rest_framework import generics, permissions, filters
from drf_api2.permissions import IsOwnerOrReadOnly
from .models import InsurancePlan
from .serializers import InsurancePlanSerializer


class InsurancePlanList(generics.ListCreateAPIView):
    """
    List insurance plans or create a plan if admin
    """
    serializer_class = InsurancePlanSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = InsurancePlan.objects.all()
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    search_fields = [
        'name',
        'description',
        'plan_type',
    ]
    ordering_fields = [
        'base_premium',
        'created_at',
    ]

    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            raise permissions.PermissionDenied('Only admin can create plans.')
        serializer.save()


class InsurancePlanDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve, update, or delete an insurance plan if admin
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = InsurancePlanSerializer
    queryset = InsurancePlan.objects.all()

    def perform_update(self, serializer):
        if not self.request.user.is_staff:
            raise permissions.PermissionDenied('Only admin can update plans.')
        serializer.save()
