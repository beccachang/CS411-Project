from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *
from .models import SearchRequest

# TODO: the route requires changing how post and get are defined?

# HAVEN'T CHANGED THIS YET
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

@api_view(['GET', 'POST'])
def get_request(request):
    if request.method == 'GET':
        serializer = SearchRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": "success",
                 "data": serializer.data},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"status": "error",
                 "data": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )
    elif request.method=='POST':
        def get(self, request, id=None):
            if id:
                item = SearchRequest.objects.get(id=id)
                serializer = SearchRequestSerializer(item)
                return Response(
                    {"status": "success",
                     "data": serializer.data},
                    status=status.HTTP_200_OK
                )

            items = SearchRequest.objects.all()
            serializer = SearchRequestSerializer(items, many=True)
            return Response(
                {"status": "success",
                 "data": serializer.data},
                status=status.HTTP_200_OK
            )