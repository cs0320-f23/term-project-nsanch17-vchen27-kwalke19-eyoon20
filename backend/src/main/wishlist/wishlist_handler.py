from flask import request, jsonify, Blueprint
from main.wishlist.wishlist_manager import WishlistManager
from main.user.user_manager import UserDoesNotExistException
from main.posting.post_manager import ItemNotFoundException

wishlist_bp = Blueprint('wishlist', __name__)
wishlist_manager = WishlistManager()

class WishlistHandler:

    
    @wishlist_bp.route("/add_wish", methods=['GET', 'POST'])
    def add_wish():
        result_dict = {}
    

        if request.method == 'GET':
            post = request.args.get("posting_name")
            buyer = request.args.get("buyer_name")
            seller = request.args.get("seller_name")
        elif request.method == 'POST':
            data = request.get_json()
            post = data.get("posting_name")
            buyer = data.get("buyer_name")
            seller = data.get("seller_name")

        if not post or not buyer or not seller:
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": "Please include all information: buyer, seller, and item."})
            return jsonify(result_dict),400

        try:
            added = wishlist_manager.add_to_wishlist(buyer,post,seller)
            result_dict.update({"result":"success"})
            result_dict.update({"added_item":added})
            return jsonify(result_dict),200
        except UserDoesNotExistException as e:
            result_dict.update({"result":"error"})
            if str(e)== "Cannot locate user to find wishlist.":
                result_dict.update({"error_message": "Unable to find buyer."})
                return jsonify(result_dict),400
            if str(e)== "Cannot locate seller of posting to add to wishlist.":
                result_dict.update({"error_message": "Unable to find seller."})
            return jsonify(result_dict),400
        except ItemNotFoundException:
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": "Unable to find posting."})
            return jsonify(result_dict),400




    @wishlist_bp.route("/remove_wish", methods=['GET', 'POST'])
    def remove_wish():
        result_dict = {}
    

        if request.method == 'GET':
            post = request.args.get("posting_name")
            buyer = request.args.get("buyer_name")
            seller = request.args.get("seller_name")
        elif request.method == 'POST':
            data = request.get_json()
            post = data.get("posting_name")
            buyer = data.get("buyer_name")
            seller = data.get("seller_name")

        if not post or not buyer or not seller:
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": "Please include all information: buyer, seller, and item."})
            return jsonify(result_dict),400
        
        try:
            removed = wishlist_manager.remove_wish(buyer,post,seller)
            result_dict.update({"result":"success"})
            result_dict.update({"removed_item":removed})
            return jsonify(result_dict),200
        except UserDoesNotExistException as e:
            result_dict.update({"result":"error"})
            if str(e)== "Cannot locate user to find wishlist.":
                result_dict.update({"error_message": "Unable to find buyer."})
                return jsonify(result_dict),400
            if str(e)== "Cannot locate seller of posting to remove from wishlist.":
                result_dict.update({"error_message": "Unable to find seller."})
            return jsonify(result_dict),400
        except ItemNotFoundException:
            result_dict.update({"result":"error"})
            result_dict.update({"error_message": "Unable to find posting."})
            return jsonify(result_dict),400