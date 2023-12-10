from flask import Flask, request, jsonify
from Posting.PostingHandler import posting_bp
from User.UserHandler import user_bp
from User.UserHandler import UserHandler
from User.UserManager import UserManager
from Posting.PostingHandler import PostingHandler


app = Flask(__name__)

app.register_blueprint(posting_bp, url_prefix="/posting")
app.register_blueprint(user_bp, url_prefix="/user")





# @app.route('/search', methods=['GET'])
# def search():
#     return SearchHandler.handle_search()

if __name__ == "__main__":
    app.run(port=8000, debug=True)