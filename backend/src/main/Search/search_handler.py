from flask import request, jsonify, Blueprint
import dataclasses
from main.Search.search_manager import SearchManager, InvalidSearchException


search_manager = SearchManager()
search_bp = Blueprint('search', __name__)
class SearchHandler:

    @search_bp.route("/search",methods=['GET', 'POST'])
    def handle_search():
        result_dict = {}

        if request.method == 'GET':
            query = request.args.get("query")
           
        elif request.method == 'POST':
            data = request.get_json()
            query = data.get("query")
            


        if not query or not type:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing query parameter. Please input a search"+ 
                                "query and indicate if searching for user or posting."})
            return jsonify(result_dict), 400


        result_dict = {"search_results": search_manager.search_posting(query)}
        result_dict.update({"result":"success"})

        return jsonify(result_dict),200
        

            
    

   