from dataclasses import dataclass
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


class UserDoesNotExistException(Exception):
    pass

class UserExistsException(Exception):
    pass

@dataclass
class User:
    first_name: str
    last_name: str
    username: str
    number: str  
    email: str
    date: str
    profile_image: str
    bio: str
    password_hash: str  
    purchases: dict
    sellings: dict
    wishlist: dict
    reviews: dict
    notifications:dict()

class UserManager:
    def __init__(self):
        self.users = {}

    def is_username_available(self, username: str) -> bool:
        return username not in self.users

    def get_user_by_username(self, username: str):
        if username in self.users:
            return self.users[username]
        raise UserDoesNotExistException("User not found.")

    def get_user_by_email(self, email: str):
        for user in self.users.values():
            if user.email == email:
                return user
        raise UserDoesNotExistException("User not found.")
    
    def get_user_by_username(self, username):
        user = self.users.get(username)
        if not user:
            raise UserDoesNotExistException(f"User with username {username} does not exist")
        return user

    def create_user(self, first_name: str, last_name: str, username: str, email: str, number: str, bio: str, profile_image: str, password: str):
            if username in self.users:
                raise UserExistsException("User already exists.")
            else:
                hashed_password = generate_password_hash(password)
                user = User(first_name, last_name, username, number, email, datetime.now().strftime("%Y-%m-%d %H:%M:%S"), profile_image, bio, hashed_password, {}, {}, {}, {},{})
                self.users[username] = user
                return user
            

 
    
   
    
    


    
    