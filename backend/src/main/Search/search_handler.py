from flask import request, jsonify, Blueprint
import dataclasses
from main.search.search_manager import SearchManager, InvalidSearchException


search_manager = SearchManager()
search_bp = Blueprint('search', __name__)
class SearchHandler:

    @search_bp.route("/search_postings",methods=['GET', 'POST'])
    def handle_search_posting():
        result_dict = {}

        if request.method == 'GET':
            query = request.args.get("query")
            type = request.args.get("type")
        elif request.method == 'POST':
            data = request.get_json()
            query = data.get("query")
            type = data.get("type")


        if not query or not type:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing query parameter. Please input a search"+ 
                                "query and indicate if searching for user or posting."})
            return jsonify(result_dict), 400

        try:
            result_dict = {"search_results": search_manager.search_posting(query,type)}
            result_dict.update({"result":"success"})

            return jsonify(result_dict),200
        except InvalidSearchException:
            result_dict = {"error_message": "Search queries can only be for a posting or user. Please indicate one."}
            result_dict.update({"result":"error"})

            return jsonify(result_dict),400
    

   