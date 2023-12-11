import dataclasses
from dataclasses import dataclass
from datetime import datetime

@dataclass
class User:
    first_name: str
    last_name: str
    username: str
    # profile: str
    date: str
    email: str
    purchases: dict()
    sellings: dict()

    def addItem(self, item, isPurchase, posting):
        if not isPurchase:
            self.sellings.update({item: posting})
        else:
            self.purchases.update({item: posting})


class UserManager:
    def __init__(self):
        self.users = {}

    def create_user(self, first_name, last_name, username, email):

        if username in self.users:
            raise KeyError("User already exists.")
        else:
            user = User(first_name, last_name, username, datetime.now().strftime("%Y-%m-%d %H:%M:%S"), email, {}, {})
            self.users[username] = user
            return user

    def get_user(self, username):
        user = self.users.get(username)
        if user is None:
            raise Exception(f"User not found with username {username}")
        return  user
    
    def get_user_database(self):
        return self.users
    
    


    
    