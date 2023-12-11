import dataclasses
from dataclasses import dataclass
from datetime import datetime
from main.User.user_manager import User
from main.User.user_handler import user_manager


@dataclass
class Posting:
    name: str
    seller: User
    price: float
    description: str
    date: str

    def dict(self):
        return {'seller': self.seller.__dict__}

class PostingManager:
    def __init__(self):
        self.postings = {}
        

    def create_posting(self, item_name, seller, price, description):
        posting = Posting(item_name, seller, float(price), description, datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

        if item_name in self.postings:
            raise KeyError("Please create a new name for your listing.")
        self.postings[f"{item_name}_{seller}"] = posting

        try:
            user_manager.get_user(seller).addItem(item_name,False, posting)
        except Exception:
            raise KeyError("User does not exist.")
        return posting

    def get_posting(self, item_name):
        return self.postings.get(item_name)
    
    def delete_posting(self,key):
        if key not in self.postings:
            raise KeyError( f"Item with key {key} not found")
        else:
            removed_item = self.postings.pop(key)
            return removed_item


