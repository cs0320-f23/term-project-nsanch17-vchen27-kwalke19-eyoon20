import unittest
from flask import Flask, request
from unittest.mock import patch
from datetime import datetime
from UserHandler import UserHandler

class TestUserProfileHandler(unittest.TestCase):

    def setUp(self):
        self.app = Flask(__name__)

    @patch('UserProfileHandler.request')
    def test_create_user_profile(self, mock_request):
        # mock request data
        mock_request.json = {'first_name': 'John', 'last_name': 'Doe', 'username': 'john_doe', 'email': 'john@example.com'}

        # call the create_user_profile method
        response = UserHandler.create_user_profile()

        # check the response status code
        self.assertEqual(response.status_code, 200)

        # check the response JSON content
        response_json = response.get_json()
        self.assertIn('user_profile', response_json)
        user_profile = response_json['user_profile']

        # check if required fields are present
        self.assertIn('first_name', user_profile)
        self.assertIn('last_name', user_profile)
        self.assertIn('username', user_profile)
        self.assertIn('email', user_profile)
        self.assertIn('signup_date', user_profile)

        # check if the signup date is a valid date string
        signup_date_str = user_profile['signup_date']
        try:
            datetime.strptime(signup_date_str, '%Y-%m-%d %H:%M:%S')
        except ValueError:
            self.fail("Invalid signup date format")

if __name__ == '__main__':
    unittest.main()
