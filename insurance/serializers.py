from rest_framework import serializers
from insurance.models import InsurancePlan


class InsurancePlanSerializer(serializers.ModelSerializer):
    created_at = serializers.ReadOnlyField()
    updated_at = serializers.ReadOnlyField()

    class Meta:
        model = InsurancePlan
        fields = [
            'id', 'name', 'description', 'plan_type',
            'base_premium', 'active', 'created_at',
            'updated_at',
        ]
