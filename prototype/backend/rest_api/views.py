from django.template.base import Token

from .serializers import *
from .models import SearchRequest
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from .wikipedia import get_wiki_articles

class SearchRequestListAPIView(ListAPIView):
    queryset = SearchRequest.objects.all()
    serializer_class = SearchRequestSerializer

class CreateSearchRequestAPIView(CreateAPIView):
    queryset = SearchRequest.objects.all()
    serializer_class = SearchRequestSerializer
    def post(self, request, *args, **kwargs):
        request.data['wikipedia_results'] = \
            get_wiki_articles(request.data['month'], request.data['year'])
        return self.create(request, *args, **kwargs)
