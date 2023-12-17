<<<<<<< HEAD
from main.Posting.posting_handler import post_manager
from main.User.user_manager import UserDoesNotExistException
from main.Posting.post_manager import ItemNotFoundException
=======
from main.posting.posting_handler import post_manager
from main.user.user_manager import UserDoesNotExistException
from main.posting.post_manager import ItemNotFoundException
from main.notifications.notifications_manager import Notification
>>>>>>> 927540b32662922890bd5fc595e4adee5edc1802
import dataclasses
from datetime import datetime
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
            key = f"{posting_name}_{username_seller}"
            added_item = post_manager.postings[key]
            user.wishlist.update({key: added_item})


            #notify seller
            id = len( user_manager.users[username_buyer].notifications) + 1
            watchers = len(post_manager.postings[key].trackers) + 1
            user_manager.users[username_seller].notifications.update({key: Notification(f"A user has wished for your item. Currently, {watchers} people are wishing for your item.",datetime.now().strftime("%Y-%m-%d %H:%M:%S"),id,False)})

            #store all users tracking post via wishlist for future notification purposes
            post_manager.postings[key].trackers.append(username_buyer)
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
          key = f"{posting_name}_{username_seller}"
          val = dataclasses.asdict(user_manager.users[username_buyer])["wishlist"][key]
          post_manager.postings[key].trackers.remove(username_buyer)
          del user_manager.users[username_buyer].wishlist[key]
          return val

        except KeyError:
            raise ItemNotFoundException("Item cannot be located to remove from wishlist.")                    