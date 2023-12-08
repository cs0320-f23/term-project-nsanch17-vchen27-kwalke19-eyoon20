from flask import Flask
from PostingHandler import PostingHandler
from UserHandler import UserHandler
from SearchHandler import SearchHandler

app = Flask(__name__)

@app.route("/make_posting", methods=["POST"])
def posting():
    return PostingHandler.handle_posting()

@app.route("/create_user", methods=["GET"])
def create_user():
    return UserHandler.create_user_profile()

@app.route('/search', methods=['GET'])
def search():
    return SearchHandler.handle_search()

if __name__ == "__main__":
    app.run(debug=True)