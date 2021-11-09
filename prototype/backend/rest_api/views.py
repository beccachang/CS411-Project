from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SearchRequestSerializer
from .models import SearchRequest

class SearchRequestViews(APIView):
    def post(self, request):
        serializer = SearchRequestSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid(): # NEED TO CHECK DATE TOO
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