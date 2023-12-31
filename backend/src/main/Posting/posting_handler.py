from flask import Flask, request, jsonify, Blueprint
from dataclasses import dataclass
import dataclasses
from main.Posting.post_manager import PostingManager
from main.Posting.post_manager import user_manager
from main.User.user_manager import UserDoesNotExistException
from main.User.user_manager import UserExistsException
from main.Posting.post_manager import PostingExistsException
from main.Posting.post_manager import ItemNotFoundException
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
import os
from flask import send_from_directory
from pathlib import Path


post_manager = PostingManager()
posting_bp = Blueprint('posting', __name__)
class PostingHandler:
     
    # @staticmethod
    @posting_bp.route("/create", methods=['POST', 'GET'])
    def make_posting():
        result_dict = {}

        if request.method == 'GET':
            item_name = request.args.get("item_name")
            seller_name = request.args.get("seller_name")
            price = request.args.get("price")
            description = request.args.get("description")
            qty = request.args.get("qty")
            big_pic = request.args.get("big_pic")
        elif request.method == 'POST':
            item_name = request.form.get("item_name")
            seller_name = request.form.get("seller_name")
            price = request.form.get("price")
            description = request.form.get("description")
            qty = request.form.get("qty")
            
            # Handle post image upload
            big_pic = request.files.get("big_pic")

        if not item_name or not seller_name or not price or not description or not qty:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing parameters. Please give a valid title, price, description, and seller username."})
            print(result_dict)
            return jsonify(result_dict), 400

        try:
            price = float(price)
            qty = int(qty)
        except (ValueError, TypeError):
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Invalid values given. Please use valid numbers for price and quantity."})
            return jsonify(result_dict), 400

        try:
            # Get the directory of the current script
            current_dir = Path(__file__).parent

            # Configure the upload folder path relative to the current script
            upload_folder = current_dir / 'posting_pics'
            os.makedirs(upload_folder, exist_ok=True)  # Create the folder if it doesn't exist

            if big_pic:
                filename = secure_filename(big_pic.filename)
                save_path = upload_folder / filename
                big_pic.save(str(save_path))  # Convert Path object to string
                picture = filename

                posting = post_manager.create_posting(item_name, seller_name, price, description, qty, picture)
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
            new_value = data.get("new_value")


        if not item_name or not seller:
            print("no item_name or seller")
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
            print("key not found.")
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
        
    # Endpoint to retrieve all posted items
    @posting_bp.route("/all", methods=['GET'])
    def get_all_postings():
        result_dict = {"result": None}

        all_postings = [dataclasses.asdict(posting) for posting in post_manager.get_all_postings()]

        result_dict = {"result": "success", "listings": all_postings}
        return jsonify(result_dict), 200
    
    @posting_bp.route('/posting_pictures/<filename>')
    def posting_pictures(filename):
        print("Requested file:", filename)
        return send_from_directory("/Users/ericyoon/Desktop/CS320/term-project-nsanch17-vchen27-kwalke19-eyoon20/backend/src/main/Posting/posting_pics", filename)

    