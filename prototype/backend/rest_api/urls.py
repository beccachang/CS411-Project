from django.urls import path
from .views import SearchRequestViews

urlpatterns = [
    path('searchrequest/', SearchRequestViews.as_view()),
    path('searchrequest/<int:id>', SearchRequestViews.as_view()),
]