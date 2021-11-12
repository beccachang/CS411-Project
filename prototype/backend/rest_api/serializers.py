from rest_framework import serializers
from .models import SearchRequest

class SearchRequestSerializer(serializers.ModelSerializer):
    month = serializers.CharField(max_length=200)
    year = serializers.IntegerField()
    wikipedia_results = serializers.JSONField(required=False)

    class Meta:
        model = SearchRequest
        fields = '__all__'