from dataclasses import dataclass
from datetime import datetime
class UserDoesNotExistException(Exception):
    pass
class UserExistsException(Exception):
    pass
@dataclass
class User:
    first_name: str
    last_name: str
    username: str
    profile: str
    date: str
    email: str
    purchases: dict()
    sellings: dict()
    wishlist: dict()
    reviews: dict()
    notifications: dict()


class UserManager:
    def __init__(self):
        self.users = {}

    def create_user(self, first_name:str, last_name:str, username:str, email:str, profile: str):

        if username in self.users:
            raise UserExistsException("User already exists.")
        else:
            user = User(first_name, last_name, username, profile, datetime.now().strftime("%Y-%m-%d %H:%M:%S"), email, {}, {}, {},{},{})
            self.users[username] = user
            return user
        

 
    
   
    
    


    
    