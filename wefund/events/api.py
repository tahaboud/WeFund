from rest_framework import generics, permissions, viewsets, serializers, status
from rest_framework.response import Response
from .models import Events, Attendants
from rest_framework.decorators import permission_classes, api_view
from .serializers import EventSerializer, AttendantsSerializer


class CreateOnly(permissions.IsAdminUser):
    def has_permission(self, request, view):
        return view.action == "create"


class ReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS


class EventAPI(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAdminUser | ReadOnly]

    def list(self, request):
        queryset = Events.objects.all()
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        event = serializer.save()
        return Response({
            "Event": EventSerializer(event, context=self.get_serializer_context()).data,
        })


class EventDetailAPI(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAdminUser]

    def list(self, request, pk):
        try:
            event = Events.objects.get(pk=pk)
            serializer = EventSerializer(event)
            return Response(serializer.data)
        except Events.DoesNotExist:
            return Response({"Event": "Event does not exist"})

    def destroy(self, request, pk=None):
        try:
            event = Events.objects.get(pk=pk)
            event.delete()
            return Response({"Event": "Event deleted seccefully"})
        except Events.DoesNotExist:
            return Response({"Event": "Event does not exist"})

    def update(self, request, pk=None):
        event = Events.objects.get(pk=pk)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AttendantsAPI(viewsets.ModelViewSet):
    serializer_class = AttendantsSerializer
    permission_classes = [permissions.IsAdminUser | CreateOnly]

    def list(self, request, pk=None):
        queryset = Attendants.objects.filter(event=pk)
        serializer = AttendantsSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, pk, *args, **kwargs):
        request.data["event"] = pk
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(event=Events.objects.get(pk=pk))
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data)
