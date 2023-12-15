from dataclasses import dataclass
from main.user.user_manager import User

@dataclass
class Review:
    rating: int
    content: str
    date: str
    author: User

class ReviewManager:
    def __init__(self):
        self.reviews = {} #key: author, value: review