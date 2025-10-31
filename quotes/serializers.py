from rest_framework import serializers
from quotes.models import Quote


class QuoteSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    plan_name = serializers.ReadOnlyField(source='plan.name')
    create_at = serializers.ReadOnlyField()

    class Meta:
        model = Quote
        fields = [
            'id', 'plan', 'age', 'num_kids', 'num_married', 'cooker',
            'tertiary_education', 'neat', 'personlity', 'spirituality',
            'steady_income', 'innocence', 'plan_name', 'user',
        ]
        read_only_fields = ['premium_plan', 'created_at']
