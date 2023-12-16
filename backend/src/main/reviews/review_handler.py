from flask import Flask, request, jsonify, Blueprint
from dataclasses import dataclass
import dataclasses
from main.reviews.review_manager import ReviewManager
from main.user.user_manager import UserDoesNotExistException

review_manager = ReviewManager()
review_bp = Blueprint('review', __name__)

class ReviewHandler:

    @review_bp.route("/create",methods=['GET', 'POST'])
    def make_review():
        if request.method == 'GET':
            seller = request.args.get("seller_name")
            rating = request.args.get("rating")
            content = request.args.get("content")
            buyer = request.args.get("buyer_name")

        elif request.method == 'POST':
            data = request.get_json()

            seller = data.get("seller_name")
            rating = data.get("rating")
            content = data.get("content")
            buyer = data.get("buyer_name")

        result_dict = {}

        if not seller or not rating or not buyer or not content:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing parameters. Please give a valid title, price, description, and seller username."})
            return jsonify(result_dict), 400
        
       
        try:
            review = review_manager.create_review(buyer,seller,int(rating),content)
            result_dict.update({"result":"success", "review": review})
            return jsonify(result_dict), 200

        except (TypeError, ValueError, NameError):
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": "Invalid rating number given."})
            return jsonify(result_dict),400
            
        except (UserDoesNotExistException,PermissionError) as e:
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": str(e)})
            return jsonify(result_dict),400
        
    @review_bp.route("/delete",methods=['GET', 'POST'])
    def delete_review():
        if request.method == 'GET':
            seller = request.args.get("seller_name")
            buyer = request.args.get("buyer_name")

        elif request.method == 'POST':
            data = request.get_json()

            seller = data.get("seller_name")
            buyer = data.get("buyer_name")

        result_dict = {}

        if not seller or not buyer:
            result_dict.update({"result": "error"})
            result_dict.update({"error_message": "Missing parameters. Please give a valid title, price, description, and seller username."})
            return jsonify(result_dict), 400
        
       
        try:
            review = review_manager.delete_review(buyer,seller)
            result_dict.update({"result":"success", "review": review})
            return jsonify(result_dict), 200
        except (UserDoesNotExistException, PermissionError) as e:
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": str(e)})
            return jsonify(result_dict),400
    


