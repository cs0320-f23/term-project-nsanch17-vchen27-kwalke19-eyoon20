from flask import Flask, request, jsonify

app = Flask(__name__)
item_database = {}  # Dictionary to store item data

class PostingHandler:
    @staticmethod
    def handle_posting():
        item_name = request.args.get("item_name")
        seller_name = request.args.get("seller_name")
        price = request.args.get("price")
        description = request.args.get("description")
        date = request.args.get("date")

        if not item_name or not seller_name or not price or not description or not date:
            return jsonify({"error": "Missing parameters"}), 400

        item_data = {
            "item_name": item_name,
            "seller_name": seller_name,
            "price": price,
            "description": description,
            "date": date
        }

        # unique key for each item
        item_key = f"{item_name}_{seller_name}_{date}"

        # store item_data in the item_database
        item_database[item_key] = item_data

        return jsonify({"item": item_data})

# Endpoint for making a posting
@app.route('/make_posting', methods=['POST'])
def make_posting():
    return PostingHandler.handle_posting()

# Endpoint for deleting an item
@app.route('/delete_item', methods=['DELETE'])
def delete_item():
    item_key = request.args.get("item_key")

    if not item_key:
        return jsonify({"error": "Missing item_key parameter"}), 400

    if item_key in item_database:
        # remove the item from the item_database
        removed_item = item_database.pop(item_key)
        return jsonify({"message": "Item deleted successfully", "deleted_item": removed_item})
    else:
        return jsonify({"error": f"Item with key {item_key} not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
