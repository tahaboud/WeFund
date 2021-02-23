from django.urls import path
from .api import WeFundAPI, DonationAPI, AddsAPI, AdminWeFundAPI, AdminGetSignatureAPI, UserGetSignatureAPI, PaypalAPI, ExecutePaymentAPI, ContactUsAPI, AboutUsAPI


urlpatterns = [
    path("wefund/", WeFundAPI.as_view({"get": "retrieve"})),
    path(
        "admin/wefund/", AdminWeFundAPI.as_view({"post": "create", "put": "update"})),
    path("donation/", DonationAPI.as_view({"post": "create", "get": "list"})),
    path("adds/", AddsAPI.as_view({"post": "create",
                                   "get": "list", "put": "update", "delete": "destroy"})),
    path("admin/getsign/", AdminGetSignatureAPI.as_view({"post": "list"})),
    path("getsign/", UserGetSignatureAPI.as_view({"post": "list"})),
    path("paypal/", PaypalAPI.as_view({"post": "list"})),
    path("paypal/<pay_id>/<payer_id>/",
         ExecutePaymentAPI.as_view({"post": "list"})),
    path("contact/", ContactUsAPI.as_view({"post": "create", "get": "list"})),
    path("about/", AboutUsAPI.as_view({"post": "create",
                                       "get": "list", "put": "update", "delete": "destroy"}))
]
