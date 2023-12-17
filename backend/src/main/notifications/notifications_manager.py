from dataclasses import dataclass
from datetime import datetime

@dataclass
class Notification:

    message: str 
    timestamp: str 
    id: int 
    viewed: bool 

    
    
        
        