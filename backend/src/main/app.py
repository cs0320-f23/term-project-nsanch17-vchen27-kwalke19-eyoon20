from flask import Flask
from flask_cors import CORS
from .Posting.posting_handler import posting_bp
from .User.user_handler import user_bp
from .Search.search_handler import search_bp
from .wishlist.wishlist_handler import wishlist_bp
from .recommendations.recommendations_handler import recs_bp

app = Flask(__name__)

# Enable CORS for all domains on all routes
CORS(app)

app.register_blueprint(posting_bp, url_prefix="/posting")
app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(search_bp, url_prefix="/search")
app.register_blueprint(wishlist_bp, url_prefix="/wishlist")
app.register_blueprint(recs_bp, url_prefix="/recommendations")


if __name__ == "__main__":
    app.run(port=8000, debug=True)
