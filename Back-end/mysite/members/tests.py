from django.test import TestCase
from rest_framework.test import APITestCase

from .models import *

from PIL import Image


class UsersTestClass(APITestCase):
    def test_get_students(self):
        response = self.client.get('/members/student/')
        self.assertEqual(200, response.status_code)

    def test_post_student_already_exist(self):
        
        
        json = {
            "birthday" : "2000-10-1",
            "user" : "1",
            "enrolled" : "1"
        }
        response = self.client.post('/members/student/', json)
        self.assertEqual(400, response.status_code)


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

class AuthTest(APITestCase):
    def test_not_authorized(self):
        response = self.client.get('/auth/users/')
        self.assertEqual(401, response.status_code)

    def test_create_new_user(self):
        json = {
            "username":"test_new_user",
            "password":"AnStrongPassword1323",
            "email":"test@test.com",
            "first_name":"testfirstname",
            "last_name":"testlastname"
        }
        response = self.client.post('/auth/users/', json)
        self.assertEqual(201, response.status_code)

    def test_create_new_user_bad_request(self):
        json = {
            "username":"test_new_user",
            "password":"AnStrongPassword1323",
            "email":"testtest.com", #bad email
            "first_name":"testfirstname",
            "last_name":"testlastname"
        }
        response = self.client.post('/auth/users/', json)
        self.assertEqual(400, response.status_code)
    
    def test_create_new_user_short_password(self):
        json = {
            "username":"test_new_user",
            "password":"1234",
            "email":"test@test.com",
            "first_name":"testfirstname",
            "last_name":"testlastname"
        }
        response = self.client.post('/auth/users/', json)
        self.assertEqual(400, response.status_code)

    def test_create_new_user_useed_username(self):
        json = {
            "username":"admin",
            "password":"AnStrongPassword1323",
            "email":"test@test.com",
            "first_name":"testfirstname",
            "last_name":"testlastname"
        }
        response = self.client.post('/auth/users/', json)

        json = {
            "username":"admin",
            "password":"AnStrongPassword1323",
            "email":"new_test@test.com",
            "first_name":"testfirstname",
            "last_name":"testlastname"
        }
        response = self.client.post('/auth/users/', json)

        self.assertEqual(400, response.status_code)

    def test_login(self):
        json = {
            "username":"test_new_user",
            "password":"AnStrongPassword1323",
            "email":"test@test.com",
            "first_name":"testfirstname",
            "last_name":"testlastname"
        }
        response = self.client.post('/auth/users/', json)
        json = {
            "username":"test_new_user",
            "password":"AnStrongPassword1323"
        }
        response = self.client.post('/auth/jwt/create', json)
        self.assertEqual(200, response.status_code)


    