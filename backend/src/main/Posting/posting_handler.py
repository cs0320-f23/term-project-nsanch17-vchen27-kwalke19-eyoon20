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
    @posting_bp.route("/create",methods=['GET', 'POST'])
    def make_posting():

        if request.method == 'GET':
            item_name = request.args.get("item_name")
            seller_name = request.args.get("seller_name")
            price = request.args.get("price")
            description = request.args.get("description")
            qty = request.args.get("qty")
            big_pic = request.args.get("big_pic")
           

        elif request.method == 'POST':
            data = request.get_json()

            item_name = data.get("item_name")
            seller_name = data.get("seller_name")
            price = data.get("price")
            description = data.get("description")
            qty = data.get("qty")
            big_pic = data.get("big_pic")
          

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
            posting = post_manager.create_posting(item_name, seller_name, price,description, qty, big_pic)

        except (PostingExistsException, UserDoesNotExistException) as e:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": str(e)})
            return jsonify(result_dict), 400
       
       
        
        
        result_dict = {"item": dataclasses.asdict(posting)}
        result_dict.update({"result": "success"})
        
        return jsonify(result_dict), 200

    # Endpoint for deleting an item
    # @staticmethod
    @posting_bp.route("/delete",methods=['GET', 'POST'])
    def delete_item():
        
        result_dict ={"result" : None}

        if request.method == 'GET':
            item_name= request.args.get("item_name")
            seller = request.args.get("seller_name")
        elif request.method == 'POST':
            data = request.get_json()

            item_name= data.get("item_name")
            seller = data.get("seller_name")

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
        
    @posting_bp.route("/modify",methods=['GET', 'POST'])
    def modify_posting():
        result_dict = {"result" : None}


        if request.method == 'GET':
            item_name= request.args.get("item_name")
            seller = request.args.get("seller_name")
            attribute = request.args.get("attribute")
            new_value = request.args.get("new_value")
        elif request.method == 'POST':
            data = request.get_json()

            item_name= data.get("item_name")
            seller = data.get("seller_name")
            attribute = data.get("attribute")
            new_value = data.args.get("new_value")


        if not item_name or not seller:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing item_key parameter"})
            return jsonify(result_dict), 400
        
        key = f"{item_name}_{seller}"
        
        try:
            mod_item = dataclasses.asdict(post_manager.change_posting(key, attribute,new_value))
            result_dict ={"result" : "success"}
            result_dict.update({"message": "Item updated successfully", "updated_item": mod_item})
            return jsonify(result_dict),200
        except (ItemNotFoundException, PermissionError) as e:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": str(e)})
            return jsonify(result_dict),400
     

    @posting_bp.route("/buy",methods=['GET', 'POST'])
    def buy_posting():
        result_dict = {"result" : None}


        if request.method == 'GET':
            item_name= request.args.get("item_name")
            seller = request.args.get("seller_name")
            buyer = request.args.get("buyer_name")
            
        elif request.method == 'POST':
            data = request.get_json()

            item_name= data.get("item_name")
            seller = data.get("seller_name")
            buyer = data.get("buyer_name")

        key = f"{item_name}_{seller}"
        try:
            bought = dataclasses.asdict(post_manager.buy_posting(buyer,key))
            result_dict ={"result" : "success"}
            result_dict.update({"message": "Item purchased successfully", "purchased_item": bought})
            return jsonify(result_dict),200
        except (ItemNotFoundException, UserDoesNotExistException, PermissionError) as e:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": str(e)})
            return jsonify(result_dict),400
      
        
           

            
        
    

        
        
            
        
        
            

   
   