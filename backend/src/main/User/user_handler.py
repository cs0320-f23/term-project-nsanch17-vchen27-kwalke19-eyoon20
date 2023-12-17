import dataclasses
from flask import request, jsonify, Blueprint
from werkzeug.security import check_password_hash 
from main.User.user_manager import UserDoesNotExistException
from main.User.user_manager import UserManager, UserExistsException

user_bp = Blueprint('user', __name__)
user_manager = UserManager()

class UserHandler:
    
    @user_bp.route("/new_user", methods=['GET', 'POST'])
    def create_user_profile():
        result_dict = {}
    
        if request.method == 'GET':
            first_name = request.args.get("first_name")
            last_name = request.args.get("last_name")
            username = request.args.get("username")
            email = request.args.get("email")
            number = request.args.get("number")  # Retrieve number from GET request
            profile = request.args.get("profile")

        elif request.method == 'POST':
            data = request.get_json()
            print(data)
            first_name = data.get("first_name")
            print(first_name)
            last_name = data.get("last_name")
            print(last_name)
            username = data.get("username")
            print(username)
            email = data.get("email")
            print(email)
            number = data.get("number")  # Retrieve number from POST request
            print(number)
            profile = data.get("profile")
            print(profile)

        # Check if all parameters are provided
        if not all([first_name, last_name, username, email, number, profile]):
            result_dict.update({"result": "error", "error_message": "Missing parameters"})
            return jsonify(result_dict), 400
        
        try:
            user_manager.create_user(first_name, last_name, username, email, number, profile)
        except UserExistsException:
            result_dict.update({"result": "error", "error_message": "User already exists. Try again."})
            return jsonify(result_dict), 400

        # Return a JSON response with the user profile data
        result_dict = {"user": dataclasses.asdict(user_manager.users[username]), "result": "success"}
        return jsonify(result_dict), 200
    
    @user_bp.route("/login", methods=['POST'])
    def login():
        result_dict = {}

        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            result_dict.update({"result": "error", "error_message": "Missing username or password"})
            return jsonify(result_dict), 400

        try:
            user = user_manager.get_user(username)
            if check_password_hash(user.password_hash, password):
                result_dict.update({"result": "success", "message": "Login successful"})
                return jsonify(result_dict), 200
            else:
                result_dict.update({"result": "error", "error_message": "Invalid password"})
                return jsonify(result_dict), 401
        except UserDoesNotExistException:
            result_dict.update({"result": "error", "error_message": "User not found"})
            return jsonify(result_dict), 404
    
    @user_bp.route("/data")
    def get_users():
        '''
        This endpoint was created for testing. It accesses the entire dictionary of users.
        '''
        return jsonify(user_manager.users)
