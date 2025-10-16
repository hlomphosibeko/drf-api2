from rest_framework import serializers
from .models import Profile


class ProfileSerilizer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'created_at', 'phone', 'address',
            'date_of_birth', 'image'
        ]
