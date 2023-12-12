import dataclasses
from dataclasses import dataclass
from datetime import datetime
from main.User.user_manager import User
from main.User.user_manager import UserDoesNotExistException
from main.User.user_manager import UserExistsException

from main.User.user_handler import user_manager

class PostingExistsException(Exception):
    pass
class ItemNotFoundException(Exception):
    pass

@dataclass
class Posting:
    name: str
    seller: User
    price: float
    description: str
    qty: int
    date: str

    def dict(self):

        return {'seller': self.seller.__dict__}
    # def asdict(self):
    #     return {
    #         'name': self.name,
    #         'seller': self.seller.asdict(),  # Call the asdict method on the nested data class
    #         'price': self.price,
    #         'description': self.description,
    #         'qty': self.qty,
    #         'date': self.date
    #     }


class PostingManager:
    def __init__(self):
        self.postings = {}
        

    def create_posting(self, item_name, seller, price, description, qty):
        posting = Posting(item_name, seller, price, description, qty, datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        key = f"{item_name}_{seller}"

        if key in self.postings:
            raise PostingExistsException("Please create a new name for your listing.")

        try:
            user_manager.get_user(seller).addItem(item_name,False, posting)
            self.postings[key] = posting

        except Exception:
            raise UserDoesNotExistException("User does not exist.")
        return posting

    def get_posting(self, item_name):
        return self.postings.get(item_name)
    
    def delete_posting(self,key:str):
        if key not in self.postings:
            raise ItemNotFoundException( f"Item with key {key} not found")
        else:
            removed_item = self.postings.pop(key)
            del dataclasses.asdict(user_manager.get_user(key.split("_")[1]))["sellings"][key.split("_")[0]]
            return removed_item
        
    def change_posting(self,key:str,attribute:str,new_value:str):
        if key not in self.postings:
            raise ItemNotFoundException( f"Item with key {key} not found")
        else:
            if attribute == "date" or  attribute == "seller":
                raise PermissionError("Cannot change these properties.")
            else:
                dataclasses.asdict(self.postings[key])[attribute] = new_value
                return self.postings[key]



