# from flask import Flask, jsonify, request

# app = Flask(__name__)

# class FilteringHandler:
#     def __init__(self, item_database):
#         self.item_database = item_database

#     def filter_by_type(self, item_type):
#         filtered_items = [item for item in self.item_database if item["type"] == item_type]
#         return filtered_items


# @app.route('/filter', methods=['GET'])
# def filter_items():
#     item_type = request.args.get('type', default=None, type=str)
    
#     if item_type is None:
#         return jsonify({"error": "Type parameter is required"}), 400

#     filtered_items = filter_handler.filter_by_type(item_type)
#     return jsonify(filtered_items)

# if __name__ == '__main__':
#     app.run(debug=True)
