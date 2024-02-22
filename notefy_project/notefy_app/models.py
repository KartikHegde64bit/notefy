"""
Will contain all the models required for NoteFy App
"""
from django.db import models
from django.conf import settings
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)

# Create your models here.

class UserManager(BaseUserManager):
    """ Manager for Users"""
    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return new user"""
        if not email:
            raise ValueError("Email Field Cannot be empty")
        user = self.model(email = self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and return a new superuser"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    """ User in the system"""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    active_plan = models.CharField(max_length=20, default = "Free")
    objects = UserManager()
    USERNAME_FIELD = 'email'

class Note(models.Model):
    """Recipe Object"""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.CASCADE,
    )
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title