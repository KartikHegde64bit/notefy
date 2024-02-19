"""URL mappings for note"""

from django.urls import (path, include, )

from rest_framework.routers import DefaultRouter
from note import views

router = DefaultRouter()
# create a new endpoint 'notes'
router.register('notes', views.NoteViewSet)

app_name = 'note'

urlpatterns = [
    path('', include(router.urls))
]