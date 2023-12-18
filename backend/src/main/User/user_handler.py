import dataclasses
import os
from flask import send_from_directory
from flask import request, jsonify, Blueprint
from werkzeug.security import check_password_hash 
from werkzeug.utils import secure_filename
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
            number = request.args.get("number") 
            profile_image = request.args.get("profile_image")
        

        elif request.method == 'POST':
            first_name = request.form.get("first_name")
            last_name = request.form.get("last_name")
            username = request.form.get("username")
            email = request.form.get("email")
            number = request.form.get("number")
            bio = request.form.get("bio")
            password = request.form.get("password")


            # Handle profile image upload
            profile_image = request.files.get("profile_image")
            if profile_image:
                filename = secure_filename(profile_image.filename)
                upload_folder = '/Users/nicolesanchez-soto/Desktop/CS32/term-project-nsanch17-vchen27-kwalke19-eyoon20/backend/src/main/User/user_profiles'  # Configure this path correctly
                save_path = os.path.join(upload_folder, filename)
                profile_image.save(save_path)
                profile = filename
            


        # Check if all parameters are provided
        if not all([first_name, last_name, username, email, number, bio, profile, password]):
            result_dict.update({"result": "error", "error_message": "Missing parameters"})
            return jsonify(result_dict), 400
        
        try:
            user_manager.create_user(first_name, last_name, username, email, number, bio, profile, password)
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
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            result_dict.update({"result": "error", "error_message": "Missing email or password"})
            return jsonify(result_dict), 400

        try:
            user = user_manager.get_user_by_email(email)
            if check_password_hash(user.password_hash, password):
                # Convert the user object to a dictionary and return it
                user_data = dataclasses.asdict(user)
                # Remove sensitive data like password hash
                user_data.pop('password_hash', None)
                result_dict.update({"result": "success", "message": "Login successful", "user": user_data})
                print(user_data)
                return jsonify(result_dict), 200
            else:
                result_dict.update({"result": "error", "error_message": "Invalid password"})
                return jsonify(result_dict), 401
        except UserDoesNotExistException:
            result_dict.update({"result": "error", "error_message": "User not found"})
            return jsonify(result_dict), 404
    


    @user_bp.route('/user_profiles/<filename>')
    def user_profiles(filename):
        print("Requested file:", filename)
        return send_from_directory("/Users/nicolesanchez-soto/Desktop/CS32/term-project-nsanch17-vchen27-kwalke19-eyoon20/backend/src/main/User/user_profiles/", filename)

    
    @user_bp.route("/data")
    def get_users():
        '''
        This endpoint was created for testing. It accesses the entire dictionary of users.
        '''
        return jsonify(user_manager.users)
