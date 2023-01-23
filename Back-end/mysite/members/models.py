from django.db import models
from datetime import date
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    university = models.CharField(max_length=160)

class BaseProfile(models.Model):
    birthday = models.DateField()
    profile_pic = models.ImageField(upload_to='images', blank=True, null=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=None)


    def __str__ (self):
        return f"{self.user.first_name} - {self.user.last_name}"

    class Meta:
        ordering = ['user__first_name', 'user__last_name']

class Comments(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField()

    def __str__ (self):
        return f"{self.user} : {self.text}"
    
    class Meta:
        ordering = ['user']

class Course(models.Model):
    name = models.CharField(max_length=150)
    comment = models.ForeignKey(Comments, on_delete=models.CASCADE, blank=True, null=True)
    score = models.PositiveIntegerField(blank=True, null=True)
    file = models.FileField(upload_to='resourses', blank=True, null=True)

    def __str__(self):
        return f"{self.name}"
    
    class Meta:
        ordering = ['score', 'name']

class Professor(BaseProfile):
    score = models.IntegerField(blank=True, null=True)
    bio = models.TextField()
    courses = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, null=True)
    resume = models.FileField(upload_to='resumes')

    def __str__ (self):
        return f"{self.user.first_name}, {self.user.last_name}"

    class Meta:
        ordering = ['score']

class StudentProfile(BaseProfile):
    enrolled = models.ForeignKey(Course, on_delete=models.CASCADE)
  
    def __str__(self):
        return f"{self.user.first_name} - {self.user.last_name}"

    class Meta:
        ordering = ['user__first_name', 'user__last_name']

class UniversityProfile(models.Model):
    name = models.CharField(max_length=150)
    address = models.TextField()
    score = models.PositiveIntegerField(default=0)
    comments = models.ForeignKey(Comments, on_delete=models.CASCADE, default=None, blank=True, null=True)
    courses = models.ForeignKey(Course, on_delete=models.CASCADE, default=None, blank=True, null=True)
    professors = models.ForeignKey(Professor, on_delete=models.CASCADE, default=None, blank=True, null=True)
    
    def __str__(self):
        return f"{self.name}"
    
    class Meta:
        ordering = ['name']