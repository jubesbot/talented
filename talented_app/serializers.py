from django.contrib.auth.models import User
from .models import Talent, Sport
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

class TalentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talent
        fields = '__all__'

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = '__all__'