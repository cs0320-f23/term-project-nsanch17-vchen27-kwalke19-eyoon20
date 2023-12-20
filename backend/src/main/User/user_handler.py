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
            bio = request.args.get("bio")
            password = request.args.get("password")
            profile = request.args.get("profile")
        

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
    

    @user_bp.route("/update_user/<username>", methods=['PATCH'])
    def update_user_profile(username):
        result_dict = {}

        # Check if user exists
        try:
            user = user_manager.get_user_by_username(username)
        except UserDoesNotExistException:
            result_dict.update({"result": "error", "error_message": "User not found"})
            return jsonify(result_dict), 404

        updated = False

        # Update text-based fields from form data
        if 'username' in request.form:
            new_username = request.form.get('username')
            if new_username != username:
                if user_manager.is_username_available(new_username):  
                    user.username = new_username
                    updated = True

                    user_manager.users[new_username] = user_manager.users.pop(username)
                else:
                    result_dict.update({"result": "error", "error_message": "Username already taken"})
                    return jsonify(result_dict), 400
        if 'first_name' in request.form:
            user.first_name = request.form['first_name']
            updated = True
        if 'last_name' in request.form:
            user.last_name = request.form['last_name']
            updated = True
        if 'number' in request.form:
            user.number = request.form['number']
            updated = True
        if 'email' in request.form:
            user.email = request.form['email']
            updated = True
        if 'bio' in request.form:
            user.bio = request.form['bio']
            updated = True
       

        # Handle profile image upload
        profile_image = request.files.get("profile_image")
        if profile_image:
            filename = secure_filename(profile_image.filename)
            upload_folder = '/Users/nicolesanchez-soto/Desktop/CS32/term-project-nsanch17-vchen27-kwalke19-eyoon20/backend/src/main/User/user_profiles'  # Set your upload folder path
            save_path = os.path.join(upload_folder, filename)
            profile_image.save(save_path)
            user.profile_image = filename
            updated = True

        if not updated:
            result_dict.update({"result": "error", "error_message": "No valid fields to update"})
            return jsonify(result_dict), 400

        result_dict.update({"result": "success", "message": "User profile updated successfully"})
        return jsonify(result_dict), 200


    @user_bp.route("/profile/<username>", methods=['GET'])
    def get_user_profile(username):
        try:
            user = user_manager.get_user_by_username(username)
            return jsonify(dataclasses.asdict(user)), 200
        except UserDoesNotExistException:
            return jsonify({"error": "User not found"}), 404
        
    @user_bp.route("/data")
    def get_users():
        '''
        This endpoint was created for testing. It accesses the entire dictionary of users.
        '''
        return jsonify(user_manager.users)
    
    @user_bp.route('/user_profiles/<filename>')
    def user_profiles(filename):
        print("Requested file:", filename)
        return send_from_directory("/Users/nicolesanchez-soto/Desktop/CS32/term-project-nsanch17-vchen27-kwalke19-eyoon20/backend/src/main/User/user_profiles/", filename)
    
    @user_bp.route("/wishlist/<username>", methods=['GET'])
    def get_user_wishlist(username):
        result_dict = {}

        try:
            user = user_manager.get_user_by_username(username)
            wishlist = user.wishlist
            result_dict.update({"result": "success", "wishlist": wishlist})
            print(wishlist)
            return jsonify(result_dict), 200
        except UserDoesNotExistException:
            result_dict.update({"result": "error", "error_message": "User not found"})
            return jsonify(result_dict), 404
        
        
