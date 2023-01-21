from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from rest_framework import viewsets, status
from rest_framework.views import APIView
from .models import *
from .serializer import *

class UniversityView(viewsets.ModelViewSet):
    queryset = UniversityProfile.objects.all()
    serializer_class = UniversityProfileSerializer

class CourseView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class StudentView(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentSerializer

class ProfessorView(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer


def login_user(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password = password)
        if user is not None:
            login(request, user)
            messages.success(request, "the user is logged in!")
            return redirect('login')
        else:
            messages.success(request, "There was an error loging in!")
            return redirect('login')
    else:
        return render(request, 'authenticate/login.html', {} )

def register_user(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request, "registeration was succusful!")
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'authenticate/register_user.html', {'form':form})

def logout_user (request):
    logout(request)
    messages.success(request, "user logged out succussfully")
    return redirect('login')