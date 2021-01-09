from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'frontend/index.html')


def emailConfirmation(request, pk, token):
    return render(request, 'frontend/index.html')


def resetPassword(request, pk, token):
    return render(request, 'frontend/index.html')
