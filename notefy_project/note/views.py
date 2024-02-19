"""Views for note apis"""

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from notefy_app import Note
from note import serializers

class NoteViewSet(viewsets.ModelViewSet):
    """View for manage note api"""
    serializer_class = serializers.NoteSerializer
    queryset = Note.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """retrieve notes for auth user"""
        return self.queryset.filter(user=self.request.user).order_by('-id')
