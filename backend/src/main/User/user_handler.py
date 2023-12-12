from flask import request, jsonify, Blueprint
from datetime import datetime
from dataclasses import dataclass
import dataclasses
from main.User.user_manager import UserManager
from main.User.user_manager import UserDoesNotExistException
from main.User.user_manager import UserExistsException

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
        except (UserExistsException):
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "User already exists. Try again."})
            return jsonify(result_dict), 400
        

        # returns a JSON response with the user profile data
        result_dict = dataclasses.asdict(user_manager.get_user(username))
        result_dict.update({"result":"success"}),200

        
        return jsonify(result_dict)
    
    @user_bp.route("/data")
    def get_users():
        '''
        This endpoint was created for testing. It accesses the entire dictionary of users.
        '''
        
        return jsonify(user_manager.get_user_database())
            
    
    

    
    