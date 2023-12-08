from flask import Flask, request, jsonify

class PostingHandler:
    @staticmethod
    def handle_posting():
        name = request.args.get("name")
        price = request.args.get("price")
        description = request.args.get("description")
        date_posted = request.args.get("date_posted")

        if not name or not price or not description or not date_posted:
            return jsonify({"error": "Missing parameters"}), 400

        item_data = {
            "name": name,
            "price": price,
            "description": description,
            "date_posted": date_posted
        }

        return jsonify({"item": item_data})
