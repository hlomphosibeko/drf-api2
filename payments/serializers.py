from rest_framework import serializers
from payments.models import Payment


class PaymentSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    quote_reference = serializers.ReadOnlyField(source='quote.id')
    created_at = serializers.ReadOnlyField()

    class Meta:
        model = Payment
        fields = [
            'id', 'user', 'quote', 'amount', 'paid_at',
            'reference_id', 'created_at', 'quote_reference'
        ]
        read_only_fields = ['paid_at', 'user']
