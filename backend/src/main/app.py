from flask import Flask, request, jsonify
from main.posting.posting_handler import posting_bp
from main.user.user_handler import user_bp
from main.search.search_handler import search_bp



app = Flask(__name__)

app.register_blueprint(posting_bp, url_prefix="/posting")
app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(search_bp,url_prefix="/search")




# @app.route('/search', methods=['GET'])
# def search():
#     return SearchHandler.handle_search()

if __name__ == "__main__":
    app.run(port=8000, debug=True)