from rest_framework import serializers
from quotes.models import Quote


class QuoteSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    plan_name = serializers.ReadOnlyField(source='plan.name')
    created_at = serializers.ReadOnlyField()

    class Meta:
        model = Quote
        fields = [
            'id', 'plan', 'age', 'num_kids', 'num_married', 'cooker',
            'tertiary_education', 'neat', 'personality', 'spirituality',
            'steady_income', 'innocence', 'plan_name', 'user', 'premium_plan',
            'created_at'
        ]
        read_only_fields = ['premium_plan', 'created_at']
