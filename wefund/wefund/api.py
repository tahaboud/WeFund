from rest_framework import permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import FileResponse
import os
from accounts.models import Account, Researcher


class ResearcherFileAPI(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request, path, id, file):
        if (request.user == Account.objects.get(id=id)):
            if(path == "id"):
                document = get_object_or_404(
                    Researcher, id_card_copy="researcher/id/"+id+"/"+file)
                path, file_name = os.path.split(file)
                response = FileResponse(document.id_card_copy,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            elif(path == "cv"):
                document = get_object_or_404(
                    Researcher, cv="researcher/cv/"+id+"/"+file)
                path, file_name = os.path.split(file)
                response = FileResponse(document.cv,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            return Response({"detail": "File not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"detail": "You do not have permission"}, status=status.HTTP_400_BAD_REQUEST)
