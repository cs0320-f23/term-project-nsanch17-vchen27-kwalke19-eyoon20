from flask import request, jsonify, Blueprint
import dataclasses
from main.search.search_manager import SearchManager


search_manager = SearchManager()
search_bp = Blueprint('search', __name__)
class SearchHandler:

    @search_bp.route("/search_postings",methods=['GET', 'POST'])
    def handle_search_posting():
        result_dict = {}

        if request.method == 'GET':
            query = request.args.get("query")
        elif request.method == 'POST':
            data = request.get_json()
            query = data.get("query")

        if not query:
            result_dict.update({"error": "Missing query parameter"})
            return jsonify(result_dict), 400

        result_dict = {"search_results": search_manager.search_posting(query)}
        result_dict.update({"result":"success"})

        return jsonify(result_dict),200
    

   