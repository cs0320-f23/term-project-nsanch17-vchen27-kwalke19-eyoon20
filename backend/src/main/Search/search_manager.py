
from main.Posting.posting_handler import post_manager
from main.User.user_handler import user_manager
import dataclasses

class InvalidSearchException(Exception):
    pass

class SearchManager:

    def search_posting(self,query:str, type:str):
        search_results = {}
     

        if type == "posting":
            database = post_manager.postings
            is_users = False
        elif type == "user":
            database = user_manager.users
            is_users = True
        else:
            raise InvalidSearchException("Specify only if search is for a posting or user.")


        # Rank items based on relevance to the search query
        for item_key, data in database.items():
            if not is_users:
                name = dataclasses.asdict(data)["name"]
                description = dataclasses.asdict(data)["description"]
            else:
                name = dataclasses.asdict(data)["username"]
            
            score = 0
            
            for term in query.split(" "):
                
            # Calculate a relevance score (higher score indicates higher relevance)
                # if term.lower() in item_name.lower() or term.lower() in description.lower():
                     # Higher weight for matching item name
                    if term.lower() in name.lower(): 
                        if len(term) > 2:  
                            score += 3 
                        else:
                            score +=1 
                    if not is_users:
                        if term.lower() in description.lower():
                            if len(term) > 2:  
                                score += 2
                            else:
                                score += 1  # Lower weight for matching description

            if score != 0:
                search_results[item_key] = {"item": data, "score": score}

        # Sort items based on the score in descending order
        return dict(sorted(search_results.items(), key=lambda x: x[1]["score"], reverse=True))
