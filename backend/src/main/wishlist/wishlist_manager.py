from main.Posting.posting_handler import post_manager
from main.User.user_manager import UserDoesNotExistException
from main.Posting.post_manager import ItemNotFoundException
import dataclasses
from copy import copy, deepcopy

from main.User.user_handler import user_manager

class WishlistManager:
    def __init__(self):
        self.wishlist = {}

    def add_to_wishlist(self,username_buyer,posting_name,username_seller):

        try:
            user = user_manager.users[username_buyer]
        except KeyError:
            raise UserDoesNotExistException("Cannot locate user to find wishlist.")
        try:
            user_manager.users[username_seller]
        except:
            raise UserDoesNotExistException("Cannot locate seller of posting to add to wishlist.")
        
        try:
            added_item = post_manager.postings[f"{posting_name}_{username_seller}"]
            user.wishlist.update({f"{posting_name}_{username_seller}": added_item})
            return added_item
        except KeyError:
            raise ItemNotFoundException("Item cannot be located to add to wishlist.")
        
        


    def remove_wish(self,username_buyer,posting_name,username_seller):
        try:
            user_manager.users[username_buyer]
        except KeyError:
            raise UserDoesNotExistException("Cannot locate user to find wishlist.")
        
        try:
            user_manager.users[username_seller]
        except:
            raise UserDoesNotExistException("Cannot locate seller of posting to remove from wishlist.")
        
        try:
        #  del dataclasses.asdict(user_manager.users[username_buyer])["wishlist"].pop(f"{posting_name}_{username_seller}")
          val = dataclasses.asdict(user_manager.users[username_buyer])["wishlist"][f"{posting_name}_{username_seller}"]
          del user_manager.users[username_buyer].wishlist[f"{posting_name}_{username_seller}"]
          return val

        except KeyError:
            raise ItemNotFoundException("Item cannot be located to remove from wishlist.")                    