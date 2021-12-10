from django.urls import path
from .views import *


urlpatterns = [
    path('', SearchRequestListAPIView.as_view(), name='search_request'),
    path('create/', CreateSearchRequestAPIView.as_view(), name='create_search_request'),
]

