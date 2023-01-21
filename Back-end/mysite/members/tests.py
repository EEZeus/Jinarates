from django.test import TestCase
from rest_framework.test import APITestCase

from .models import *

class UsersTestClass(APITestCase):
    def test_get_students(self):
        response = self.client.get('/members/student/')
        self.assertEqual(200, response.status_code)

    def test_get_professor(self):
        response = self.client.get('/members/professor/')
        self.assertEqual(200, response.status_code)

class UniversityTestClass(APITestCase):
    def test_get_university(self):
        response = self.client.get('/members/university/')
        self.assertEqual(200, response.status_code)

class CourseTestClass(APITestCase):
       def test_get_university(self):
        response = self.client.get('/members/course/')
        self.assertEqual(200, response.status_code) 