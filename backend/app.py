from flask import Flask
from posting import PostingHandler

app = Flask(__name__)

@app.route("/posting", methods=["GET"])
def posting():
    return PostingHandler.handle_posting()

if __name__ == "__main__":
    app.run(debug=True)