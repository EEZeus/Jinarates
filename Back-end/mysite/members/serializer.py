from rest_framework import serializers
from .models import UniversityProfile

class UniversityProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversityProfile
        fields = '__all__'