
from main.posting.posting_handler import post_manager
import dataclasses

class SearchManager:

    def search_posting(self,query:str):
        search_results = {}
        postings = post_manager.postings

        # Rank items based on relevance to the search query
        for item_key, posting in postings.items():
            item_name = dataclasses.asdict(posting)["name"]
            description = dataclasses.asdict(posting)["description"]
            score = 0
            
            for term in query.split(" "):
                    if len(term) > 2:
                # Calculate a relevance score (higher score indicates higher relevance)
                    # if term.lower() in item_name.lower() or term.lower() in description.lower():
                        if term.lower() in item_name.lower():  
                            score += 2  # Higher weight for matching item name
                        if term.lower() in description.lower():
                            score += 1  # Lower weight for matching description

            if score != 0:
                search_results[item_key] = {"item": posting, "score": score}

        # Sort items based on the score in descending order
        return dict(sorted(search_results.items(), key=lambda x: x[1]["score"], reverse=True))
