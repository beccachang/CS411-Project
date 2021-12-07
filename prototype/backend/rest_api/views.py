from .serializers import *
from .models import SearchRequest
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from .wikipedia import get_wiki_articles
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

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



# LEGACY CODE BELOW (MAY BE USEFUL FOR REFERENCE LATER)
# class SearchRequestViews(APIView):
#     def post(self, request):
#         serializer = SearchRequestSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(
#                 {"status": "success",
#                  "data": serializer.data},
#                 status=status.HTTP_200_OK
#             )
#         else:
#             return Response(
#                 {"status": "error",
#                  "data": serializer.errors},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
#
#     def get(self, request, id=None):
#         if id:
#             item = SearchRequest.objects.get(id=id)
#             serializer = SearchRequestSerializer(item)
#             return Response(
#                 {"status": "success",
#                  "data": serializer.data},
#                 status=status.HTTP_200_OK
#             )
#
#         items = SearchRequest.objects.all()
#         serializer = SearchRequestSerializer(items, many=True)
#         return Response(
#             {"status": "success",
#              "data": serializer.data},
#             status=status.HTTP_200_OK
#         )
#
# @api_view(['GET', 'POST'])
# def get_request(request):
#     if request.method == 'GET':
#         # if id:
#         #     item = SearchRequest.objects.get(id=id)
#         #     serializer = SearchRequestSerializer(item)
#         #     return Response(
#         #         {"status": "success",
#         #          "data": serializer.data},
#         #         status=status.HTTP_200_OK
#         #     )
#
#         items = SearchRequest.objects.all()
#         serializer = SearchRequestSerializer(items, many=True)
#         return Response(
#             {"status": "success",
#              "data": serializer.data},
#             status=status.HTTP_200_OK
#         )
#     elif request.method == 'POST':
#         serializer = SearchRequestSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(
#                 {"status": "success",
#                  "data": serializer.data},
#                 status=status.HTTP_200_OK
#             )
#         else:
#             return Response(
#                 {"status": "error",
#                  "data": serializer.errors},
#                 status=status.HTTP_400_BAD_REQUEST
#             )