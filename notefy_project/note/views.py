"""Views for note apis"""

from rest_framework import (
    viewsets,
    mixins,
    status,
)

from drf_spectacular.utils import (
    extend_schema_view,
    extend_schema,
    OpenApiParameter,
    OpenApiTypes,
)

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from notefy_app.models import Note
from note import serializers

class NoteViewSet(viewsets.ModelViewSet):
    """View for manage note api"""
    serializer_class = serializers.NoteDetailSerializer
    queryset = Note.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """retrieve notes for auth user"""
        return self.queryset.filter(user=self.request.user).order_by('-id').distinct()

    def get_serializer_class(self):
        """return the serializer class for request"""

        # override the default class for list view by our serializer for note
        if self.action == 'list':
            return serializers.NoteSerializer
        
        return self.serializer_class
    
    def perform_create(self, serializer):
        """Create a new note"""
        serializer.save(user=self.request.user) 