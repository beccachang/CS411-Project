from django.urls import path
# from .views import SearchRequestViews
# from .views import get_request
from .views import *
from rest_framework import routers
# TODO: find the route of the project to do CRUD operations

# router = routers.SimpleRouter()
# router.register(r'searchrequest', SearchRequestViews)


urlpatterns = [
    path('', SearchRequestListAPIView.as_view(), name='search_request'),
    path('create/', CreateSearchRequestAPIView.as_view(), name='create_search_request'),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    # LEGACY CODE BELOW (MAY BE USEFUL FOR REFERENCE)
    # path('searchrequest/', views.SearchRequestViews.as_view()),
    # path('searchrequest/<int:id>', views.SearchRequestViews.as_view()),
    # path('searchrequest/request', get_request),
    # path('get/<int:id>', RetrieveSearchRequestAPIView.as_view(), name='retrieve_search_request'),
]

