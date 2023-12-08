from flask import Flask, request, jsonify

class PostingHandler:
    @staticmethod
    def handle_posting():
        item_name = request.args.get("item_name")
        price = request.args.get("price")
        description = request.args.get("description")
        date = request.args.get("date")

        if not name or not price or not description or not date_posted:
            return jsonify({"error": "Missing parameters"}), 400

        item_data = {
            "item_name": item_name,
            "price": price,
            "description": description,
            "date": date
        }

        return jsonify({"item": item_data})
