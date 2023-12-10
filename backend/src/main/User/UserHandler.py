from flask import request, jsonify, Blueprint
from datetime import datetime
from dataclasses import dataclass
import dataclasses
from User.UserManager import UserManager

user_bp = Blueprint('user', __name__)
user_manager = UserManager()

class UserHandler:

    
    @user_bp.route("/new_user")
    def create_user_profile():
        result_dict = {}
       

        # extracts required fields
        first_name = request.args.get("first_name")
        last_name = request.args.get("last_name")
        username = request.args.get("username")
        email = request.args.get("email")
       

          # checks if all parameters are provided
        if not first_name or not last_name or not username or not email:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing parameters"})
            return jsonify(result_dict), 400
        
        try:
           user_manager.create_user(first_name,last_name,username,email)
        except:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "User already exists. Try again."})
            return jsonify(result_dict), 400
        

        # returns a JSON response with the user profile data
        result_dict = dataclasses.asdict(user_manager.get_user(username))
        result_dict.update({"result":"success"})

        
        return jsonify(result_dict)
    

    
    