# from django.contrib.auth.models import User
# from .models import Profile
# from rest_framework import status
# from rest_framework.test import APITestCase


# class ProfileListViewTests(APITestCase):
#     def setUp(self):
#         User.objects.create_user(username='olaf', password='pass')
#         User.objects.create_user(username='anna', password='pass')

#     def test_can_list_profiles(self):
#         olaf = User.objects.get(username='olaf')
#         Profile.objects.create(owner=olaf)
#         response = self.client.get('/profiles/')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
