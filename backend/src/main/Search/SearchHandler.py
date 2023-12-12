from flask import request, jsonify

class SearchHandler:
    @staticmethod
    def handle_search():
        query = request.args.get("query")

        if not query:
            return jsonify({"error": "Missing query parameter"}), 400

        search_results = {}

        # Rank items based on relevance to the search query
        for item_key, item_data in item_database.items():
            item_name = item_data["item_name"]
            description = item_data["description"]

            # Calculate a relevance score (higher score indicates higher relevance)
            score = 0

            if query.lower() in item_name.lower():
                score += 2  # Higher weight for matching item name

            if query.lower() in description.lower():
                score += 1  # Lower weight for matching description

            search_results[item_key] = {"item": item_data, "score": score}

        # Sort items based on the score in descending order
        sorted_results = dict(sorted(search_results.items(), key=lambda x: x[1]["score"], reverse=True))

        return jsonify({"search_results": sorted_results})