from dataclasses import dataclass
from datetime import datetime

@dataclass
class Notification:

    message: str 
    timestamp: str 
    id: int 
    viewed: bool 

    # def __init__(self, message, timestamp=None, viewed=None, id=None):
    #     self.message = message
    #     self.timestamp = timestamp
    #     self.viewed = viewed 
    #     self.id = id


# class NotificationsManager():
    
    
        
        