from flask import request, jsonify
from datetime import datetime

class UserHandler:
    @staticmethod
    def create_user_profile():
        # gets data from the request JSON or form data
        data = request.json or request.form

        # extracts required fields
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        username = data.get("username")
        email = data.get("email")

        # checks if all parameters are provided
        if not first_name or not last_name or not username or not email:
            return jsonify({"error": "Missing parameters"}), 400

        signup_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # store the user profile data
        user_profile_data = {
            "first_name": first_name,
            "last_name": last_name,
            "username": username,
            "email": email,
            "signup_date": signup_date
        }

        # returns a JSON response with the user profile data
        return jsonify({"user_profile": user_profile_data})
