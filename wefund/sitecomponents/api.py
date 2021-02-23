from rest_framework import viewsets, permissions, status, serializers
from rest_framework.response import Response
from .models import WeFund, Adds, Donation, ContactUs, AboutUs
from .serializers import WeFundSerializer, AddsSerializer, DonationSerializer, AdminWeFundSerializer, ZoomSerializer, PaypalSerializer, ContactUsSerializer, AboutUsSerializer
import hashlib
import hmac
import base64
import time
import paypalrestsdk
from paypalcheckoutsdk.core import PayPalHttpClient, SandboxEnvironment
from paypalcheckoutsdk.orders import OrdersCreateRequest
from paypalhttp import HttpError
import json


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
        if request.user.is_anonymous:
            return view.action == "list"
        else:
            return view.action == "list" or request.user.is_admin


class CreateOnly(permissions.IsAdminUser):
    def has_permission(self, request, view):
        return view.action == "create"


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
        try:
            components = WeFund.objects.get(pk=1)
            serializer = WeFundSerializer(components)
            return Response(serializer.data)
        except WeFund.DoesNotExist:
            return Response({"response": "The super user did not create an instance yet"}, status=status.HTTP_400_BAD_REQUEST)


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


class PaypalAPI(viewsets.ModelViewSet):

    def list(self, request):
        client_id = "AdVeDZo5bjY4piJOV_Chxp-rtdDj9WckOmEQUWHluPxMMhzcxVHLnAUdO3wfWLA4YVE5TTDdisOZEHBj"
        client_secret = "EBO2BuhwDYkR3J6TThhTKIbxXTOp_OU6jWydmQ2spS8qr2AmhG9WROFE9i-EDS02zcci21xn-mQ5qLLK"

        serializer = PaypalSerializer(data=request.data)
        if serializer.is_valid():
            paypalrestsdk.configure({
                "mode": "sandbox",  # sandbox or live
                "client_id": client_id,
                "client_secret": client_secret})
            payment = paypalrestsdk.Payment({
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"},
                "redirect_urls": {
                    "return_url": "http://127.0.0.1:8000/payment/execute",
                    "cancel_url": "http://127.0.0.1:8000/"},
                "transactions": [{
                    "item_list": {
                        "items": [{
                            "name": serializer.data["name"],
                            "sku": serializer.data["name"],
                            "price": serializer.data["price"],
                            "currency": "USD",
                            "quantity": serializer.data["quantity"]}]},
                    "amount": {
                        "total": int(serializer.data["price"])*int(serializer.data["quantity"]),
                        "currency": "USD"}}]})
            if payment.create():
                for link in payment.links:
                    if link.rel == "approval_url":
                        approval_url = str(link.href)
                return Response({"URL": approval_url})
            else:
                return Response({"error": payment.error}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExecutePaymentAPI(viewsets.ModelViewSet):

    def list(self, request, pay_id, payer_id):
        client_id = "AdVeDZo5bjY4piJOV_Chxp-rtdDj9WckOmEQUWHluPxMMhzcxVHLnAUdO3wfWLA4YVE5TTDdisOZEHBj"
        client_secret = "EBO2BuhwDYkR3J6TThhTKIbxXTOp_OU6jWydmQ2spS8qr2AmhG9WROFE9i-EDS02zcci21xn-mQ5qLLK"

        paypalrestsdk.configure({
            "mode": "sandbox",  # sandbox or live
            "client_id": client_id,
            "client_secret": client_secret})
        payment = paypalrestsdk.Payment.find(pay_id)

        if payment.execute({"payer_id": payer_id}):
            return Response({"response": "Payment execute successfully"})
        else:
            return Response({"error": payment.error}, status=status.HTTP_400_BAD_REQUEST)


class ContactUsAPI(viewsets.ModelViewSet):
    permission_classes = (CreateOnly,)

    def list(self, request):
        messages = ContactUs.objects.all()
        serializer = ContactUsSerializer(messages, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ContactUsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AboutUsAPI(viewsets.ModelViewSet):
    permission_classes = (IsAdminOrReadOnly,)

    def list(self, request):
        try:
            aboutContent = AboutUs.objects.get(pk=1)
            serializer = AboutUsSerializer(aboutContent)
            return Response(serializer.data)
        except AboutUs.DoesNotExist:
            return Response({"error": "Admin has not created about us content yet"}, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request):
        try:
            AboutUs.objects.get(pk=1)
            return Response({"error": "There is already an about us content you can only update it"}, status=status.HTTP_400_BAD_REQUEST)
        except AboutUs.DoesNotExist:
            serializer = AboutUsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request):
        try:
            aboutContent = AboutUs.objects.get(pk=1)
            serializer = AboutUsSerializer(aboutContent, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except AboutUs.DoesNotExist:
            return Response({"error": "Admin has not created about us content yet"}, status=status.HTTP_400_BAD_REQUEST)
