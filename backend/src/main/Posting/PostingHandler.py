from flask import Flask, request, jsonify, Blueprint
from dataclasses import dataclass
import dataclasses
from Posting.PostManager import PostingManager



from datetime import datetime




post_manager = PostingManager()
posting_bp = Blueprint('posting', __name__)
class PostingHandler:
    
     
    # @staticmethod
    @posting_bp.route("/create")
    def make_posting():
        item_name = request.args.get("item_name")
        seller_name = request.args.get("seller_name")
        price = request.args.get("price")
        description = request.args.get("description")
        

        result_dict = {}
    

        try:
            price = float(price)
        except (NameError, TypeError):
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Invalid price. Please use a valid number."})
            return jsonify(result_dict),400

        if not item_name or not seller_name or not price or not description:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing parameters. Please give a valid title, price, description, and seller username."})
            return jsonify(result_dict), 400
        
        
        try:
            posting = post_manager.create_posting(item_name, seller_name, price,description)
        except:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "User not found."})
            return jsonify(result_dict), 400
    
        result_dict = dataclasses.asdict(posting)
        result_dict.update({"result": "success"})
     
        
        return jsonify(result_dict), 200

    # Endpoint for deleting an item
    # @staticmethod
    @posting_bp.route("/delete")
    def delete_item():
        result_dict ={"result" : None}

        item_name = request.args.get("item_name")
        seller = request.args.get("seller")


        if not item_name or not seller:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing item_key parameter"})
            return jsonify(result_dict), 400
        
        key = item_name +"_" + seller
        try:
            
            print(key)
            removed_item = post_manager.delete_posting(key)
            result_dict ={"result" : "success"}
            result_dict.update({"message": "Item deleted successfully", "deleted_item": removed_item})
            result_dict.update({"details": removed_item})
            return jsonify(result_dict)
        except:
            result_dict.update({"result": "error"})
            result_dict.update({"error": f"Item with key {key} not found"})
    
            return jsonify(result_dict), 404
            
            
        
        
            

   
   