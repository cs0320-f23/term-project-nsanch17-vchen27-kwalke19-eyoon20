import dataclasses
from dataclasses import dataclass
from datetime import datetime
from main.User.user_manager import User
from main.User.user_manager import UserDoesNotExistException
from main.User.user_manager import UserExistsException
from enum import Enum
from main.notifications.notifications_manager import Notification

from main.User.user_handler import user_manager

class PostingExistsException(Exception):
    pass
class ItemNotFoundException(Exception):
    pass
class Status(str,Enum):
    FOR_SALE = "For sale"
    PENDING = "Pending"
    PURCHASED = "Purchased"


@dataclass
class Posting:
    name: str
    seller: User
    price: float
    description: str
    qty: int
    date: str
    status: Status 
    picture:str
    trackers: list()

    def dict(self):

        return {'seller': self.seller.__dict__}


class PostingManager:
    def __init__(self):
        self.postings = {}
        

    def create_posting(self, item_name, seller_name, price, description, qty, big_pic):
        posting = Posting(item_name, seller_name, price, description, qty, datetime.now().strftime("%Y-%m-%d %H:%M:%S"), Status.FOR_SALE, big_pic, [])
        key = f"{item_name}_{seller_name}"

        if key in self.postings:
            raise PostingExistsException("Please create a new name for your listing.")

        try:
            user_manager.users[seller_name].sellings.update({key: posting})
            self.postings[key] = posting

        except Exception:
            raise UserDoesNotExistException("User does not exist.")
        return posting

    
    def delete_posting(self,key:str):
        if key not in self.postings:
            raise ItemNotFoundException( f"Item with key {key} not found")
        else:
            removed_item = self.postings.pop(key)
            del user_manager.users[key.split("_")[1]].sellings[key]
            return removed_item
        
    def change_posting(self,key:str,attribute:str,new_value:str):
        if key not in self.postings:
            raise ItemNotFoundException( f"Item with key {key} not found")
        else:
            if attribute == "date" or  attribute == "seller":
                raise PermissionError(f"Cannot change the following property: {attribute}.")
            else:
                mod_posting = self.postings[key]
                
                if attribute not in dataclasses.asdict(mod_posting):
                    raise PermissionError("Attribute does not exist for posting.")

                else:
                    setattr(mod_posting, attribute, new_value)
                    self.postings[key] = mod_posting
                
                    return mod_posting
                
    def get_all_postings(self):
        return list(self.postings.values())
                
    def buy_posting(self,buyer_name,key):
        if key not in self.postings:
            raise ItemNotFoundException( f"Item with key {key} not found")
        if self.postings[key].status == Status.PURCHASED:
            raise PermissionError( f"Cannot purchase item already purchased.")

        else:
            try:
                user_manager.users[buyer_name].purchases.update({key:self.postings[key]})
                
                id = len( user_manager.users[buyer_name].notifications) + 1
                
                #notify user item has been purchased
                user_manager.users[buyer_name].notifications.update({key:
                                                                     Notification( f"The seller has marked{key.split('_')[0]} as purchased!",datetime.now().strftime("%Y-%m-%d %H:%M:%S"),id,False)})
                #notify other users w item in wishlist that it's been purchased
                for name in self.postings[key].trackers:
                    if name != buyer_name:
                        user_manager.users[name].notifications.update({key:
                                                                     Notification( f"Listing {key.split('_')[0]} has been purchased!",datetime.now().strftime("%Y-%m-%d %H:%M:%S"),id,False)})

                self.postings[key].status = Status.PURCHASED
                return self.postings[key]
            except KeyError:
                UserDoesNotExistException("Cannot find user to purchase posting.")
