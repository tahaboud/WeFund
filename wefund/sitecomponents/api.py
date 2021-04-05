from rest_framework import viewsets, permissions, status, serializers
from rest_framework.response import Response
from .models import WeFund, Adds, Donation
from .serializers import WeFundSerializer, AddsSerializer, DonationSerializer, AdminWeFundSerializer, ZoomSerializer
import hashlib
import hmac
import base64
import time


def generateSignature(role):
    ts = int(round(time.time() * 1000)) - 30000
    msg = "Pvr06z3zRNueKolA69kBCA" + str(2715966816) + str(ts) + str(role)
    message = base64.b64encode(bytes(msg, 'utf-8'))
    secret = bytes("MmmN7VIVwkphdx3TSWsRoaMEwJPYtYiVLycb", 'utf-8')
    hash = hmac.new(secret, message, hashlib.sha256)
    hash = base64.b64encode(hash.digest())
    hash = hash.decode("utf-8")
    tmpString = "%s.%s.%s.%s.%s" % (
        "Pvr06z3zRNueKolA69kBCA", str(2715966816), str(ts), str(role), hash)
    signature = base64.b64encode(bytes(tmpString, "utf-8"))
    signature = signature.decode("utf-8")
    return signature.rstrip("=")


class IsSuperUser(permissions.BasePermission):
    def has_permission(self, request, view):
        return view.action == "retrieve" or request.user.is_superuser


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return view.action == "list" or request.user.is_admin


class AdminWeFundAPI(viewsets.ModelViewSet):
    serializer_class = AdminWeFundSerializer
    permission_classes = [IsSuperUser]

    def create(self, request):
        try:
            WeFund.objects.get(pk=1)
            raise serializers.ValidationError(
                {"Object": "You can't create another instace, you can only update"})
        except WeFund.DoesNotExist:
            serializer = AdminWeFundSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request):
        component = WeFund.objects.get(pk=1)
        serializer = AdminWeFundSerializer(component, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WeFundAPI(viewsets.ModelViewSet):
    serializer_class = WeFundSerializer

    def retrieve(self, request):
        components = WeFund.objects.get(pk=1)
        serializer = WeFundSerializer(components)
        return Response(serializer.data)


class AddsAPI(viewsets.ModelViewSet):
    serializer_class = AddsSerializer
    permission_classes = (IsAdminOrReadOnly)

    def list(self, request):
        adds = Adds.objects.all()
        serializer = AddsSerializer(adds)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        add = Adds.objects.get(pk=pk)
        serializer = AddsSerializer(add, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        add = Adds.objects.get(pk=pk)
        add.delete()
        return Response({"Add": "Add deleted succefully"})


class DonationAPI(viewsets.ModelViewSet):
    serializer_class = DonationSerializer
    permission_classes = [IsAdminOrReadOnly]

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        donations = Donation.objects.all()
        serializer = DonationSerializer(donations)
        return Response(serializer.data)


class AdminGetSignatureAPI(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAdminUser,)

    def list(self, request):
        serializer = ZoomSerializer(data=request.data)
        if serializer.is_valid():
            signature = generateSignature(role=int(serializer.data["role"]))
            return Response({"signature": signature})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserGetSignatureAPI(viewsets.ModelViewSet):

    def list(self, request):
        signature = generateSignature(role=0)
        return Response({"signature": signature})
