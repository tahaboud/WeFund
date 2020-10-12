from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, Researcher


class AccountAdmin(UserAdmin):
    list_display = ("email", "first_name", "last_name",
                    "date_joined", "is_admin", "is_staff")
    search_fields = ("email",)
    readonly_fields = ()
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)
admin.site.register(Researcher)
