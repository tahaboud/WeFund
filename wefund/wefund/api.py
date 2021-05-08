from rest_framework import permissions, viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import FileResponse
import os
from accounts.models import Account, Researcher
from researches.models import Research
from events.models import Events
from rest_framework import serializers
from base64 import b64decode
from Crypto.Cipher import AES
from Crypto.Protocol.KDF import PBKDF2
import base64
from django.http import Http404


def decrypt(encrypted, passcode, salt):
    data = b64decode(encrypted)
    bytes = PBKDF2(passcode.encode("utf-8"), salt.encode("utf-8"), 48, 128)
    iv = bytes[0:16]
    key = bytes[16:48]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    text = cipher.decrypt(data)
    text = text[:-text[-1]].decode("utf-8")
    return text


class ResearcherFileAPI(viewsets.ModelViewSet):

    def list(self, request, path, id, file, token):
        token = token.replace("Por21Ld", "/")
        userLastLogin = decrypt(token, path, file)
        account = Account.objects.get(
            id=pk)
        accountLastLogin = str(account.last_login).split("+")[0].split(" ")
        accountLastLogin = accountLastLogin[0]+"T"+accountLastLogin[1]+"Z"
        if (accountLastLogin == userLastLogin):
            if(path == "id"):
                document = Researcher.objects.get(user=id)
                path, file_name = os.path.split(file)
                response = FileResponse(document.id_card_copy,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            elif(path == "cv"):
                document = Researcher.objects.get(user=id)
                path, file_name = os.path.split(file)
                response = FileResponse(document.cv,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            raise Http404("File does not exist")
        raise Http404("File does not exist")


class EventsFileAPI(viewsets.ModelViewSet):
    def list(self, request, eventName, file):
        document = get_object_or_404(
            Events, image="events/"+eventName+"/"+file)
        path, file_name = os.path.split(file)
        response = FileResponse(document.image,)
        response["Content-Disposition"] = "attachement; filename=" + file_name
        return response


class AdminResearcherFileAPI(viewsets.ModelViewSet):

    def list(self, request, pk, path, id, file, token):
        token = token.replace("Por21Ld", "/")
        userLastLogin = decrypt(token, path, file)
        account = Account.objects.get(
            id=pk)
        accountLastLogin = str(account.last_login).split("+")[0].split(" ")
        accountLastLogin = accountLastLogin[0]+"T"+accountLastLogin[1]+"Z"
        if (accountLastLogin == userLastLogin and account.is_admin):
            if(path == "id"):
                document = Researcher.objects.get(user=id)
                path, file_name = os.path.split(file)
                response = FileResponse(document.id_card_copy,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            elif(path == "cv"):
                document = Researcher.objects.get(user=id)
                path, file_name = os.path.split(file)
                response = FileResponse(document.cv,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            elif(path == "research"):
                researcher = Researcher.objects.get(user=id)
                document = Research.objects.get(researcher=researcher)
                path, file_name = os.path.split(file)
                response = FileResponse(document.papers,)
                response["Content-Disposition"] = "attachement; filename=" + file_name
                return response
            raise Http404("File does not exist")
        raise Http404("File does not exist")
