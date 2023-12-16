from dataclasses import dataclass
import dataclasses
from main.user.user_manager import User
from main.user.user_handler import user_manager
from main.user.user_manager import UserDoesNotExistException
from datetime import datetime

@dataclass
class Review:
    rating: int
    content: str
    date: str
    author: User

class ReviewManager:
    def __init__(self):
        self.reviews = {} #key: author, value: review

    def create_review(self, buyer:str, seller:str, rating:int, content:str):
        try:
            user_manager.users[buyer]
        except KeyError:
            raise UserDoesNotExistException("Buyer account cannot be found.")
        
        try:
            user_manager.users[seller]
        except KeyError:
            raise UserDoesNotExistException("Seller account cannot be found.")
        

        if rating < 1 or rating > 5:
            raise ValueError("Rating must be greater than 0 and less than 6.")
        

        purchases = dataclasses.asdict(user_manager.users[buyer])["purchases"]
        if not any(seller in name.split("_")[1] for name in purchases):
            raise PermissionError("Listing must be purchased from the seller.")
 

        new_review = Review(rating,content,datetime.now().strftime("%Y-%m-%d %H:%M:%S"), user_manager.users[buyer])
        user_manager.users[seller].reviews.update({buyer:Review(rating,content,datetime.now().strftime("%Y-%m-%d %H:%M:%S"), user_manager.users[buyer])})
        return new_review
    
    def delete_review(self, buyer:str, seller:str):
        try:
            user_manager.users[buyer]
        except KeyError:
            raise UserDoesNotExistException("Buyer account cannot be found.")
        
        try:
            user_manager.users[seller]
        except KeyError:
            raise UserDoesNotExistException("Seller account cannot be found.")

        try:
           return user_manager.users[seller].reviews.pop(buyer)
        except KeyError:
            raise UserDoesNotExistException("Please check that the given buyer has purchased from and given a review for the given seller.")
           

    