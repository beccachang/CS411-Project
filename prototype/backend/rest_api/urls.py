from django.urls import path
# from .views import SearchRequestViews, get_request
from .views import get_request
# TODO: find the route of the project to do CRUD operations

urlpatterns = [
    # path('searchrequest/', SearchRequestViews.as_view()),
    # path('searchrequest/<int:id>', SearchRequestViews.as_view()),
    path('searchrequest/request', get_request),
]