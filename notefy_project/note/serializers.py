"""Serializer for note APIS"""

from rest_framework import serializers
from notefy_app.models import Note

class NoteSerializer(serializers.ModelSerializer):
    """Serializer for recipes"""

    class Meta:
        model  = Note
        fields = ['id', 'title', 'description']
        read_only_fields = ['id']