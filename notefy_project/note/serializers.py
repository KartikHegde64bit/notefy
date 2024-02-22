"""Serializer for note APIS"""

from rest_framework import serializers
from notefy_app.models import Note

class NoteSerializer(serializers.ModelSerializer):
    """Serializer for recipes"""

    class Meta:
        model  = Note
        fields = ['id', 'title']
        read_only_fields = ['id']
    
    def create(self, validated_data):
        """Create a Note."""
        recipe = Note.objects.create(**validated_data)
        return recipe

class NoteDetailSerializer(NoteSerializer):
    """Serializer for note detail view"""

    class Meta(NoteSerializer.Meta):
        fields = NoteSerializer.Meta.fields + ['description']