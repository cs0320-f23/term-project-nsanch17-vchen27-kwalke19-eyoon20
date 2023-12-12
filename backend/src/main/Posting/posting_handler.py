from flask import Flask, request, jsonify, Blueprint
from dataclasses import dataclass
import dataclasses
from main.Posting.post_manager import PostingManager
from main.Posting.post_manager import user_manager
from main.User.user_manager import UserDoesNotExistException
from main.User.user_manager import UserExistsException
from main.Posting.post_manager import PostingExistsException
from main.Posting.post_manager import ItemNotFoundException





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
        qty = request.args.get("qty")
        

        result_dict = {}

        if not item_name or not seller_name or not price or not description or not qty:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing parameters. Please give a valid title, price, description, and seller username."})
            return jsonify(result_dict), 400

        try:
            price = float(price)
            qty = int(qty)
        except (NameError, TypeError, ValueError):
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Invalid values given. Please use valid numbers for price and quantity."})
            return jsonify(result_dict),400

   

        try:
            posting = post_manager.create_posting(item_name, seller_name, price,description, qty)

        except (PostingExistsException):
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Item already created under this name."})
            return jsonify(result_dict), 400
        except (UserDoesNotExistException):
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

        item_name= request.args.get("item_name")
        seller = request.args.get("seller_name")

        if not item_name or not seller:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing item_key parameter"})
            return jsonify(result_dict), 400
        
        key = f"{item_name}_{seller}"
        
        try:
            removed_item = post_manager.delete_posting(key)
            result_dict ={"result" : "success"}
            result_dict.update({"message": "Item deleted successfully", "deleted_item": removed_item})
            return jsonify(result_dict)
        except (ItemNotFoundException):
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": f"Item with key {key} not found"})
    
            return jsonify(result_dict), 400
        
    @posting_bp.route("/modify")
    def modify_posting():
        result_dict = {"result" : None}

        item_name= request.args.get("item_name")
        seller = request.args.get("seller_name")
        attribute = request.args.get("attribute")
        new_value = request.args.get("new_value")


        if not item_name or not seller:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing item_key parameter"})
            return jsonify(result_dict), 400
        
        key = f"{item_name}_{seller}"
        
        try:
            mod_item = dataclasses.asdict(post_manager.change_posting(key, attribute,new_value))
            result_dict ={"result" : "success"}
            result_dict.update({"message": "Item updated successfully", "updated_item": mod_item})
            return jsonify(result_dict)
        except(ItemNotFoundException, PermissionError):
            result_dict.update({"result": "error"})
            result_dict.update({"error": f"Item with key {key} not found"})

            return jsonify(result_dict), 400
        
    

        
        
            
        
        
            

   
   