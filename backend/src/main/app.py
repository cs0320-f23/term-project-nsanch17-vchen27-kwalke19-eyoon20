from flask import Flask
from main.posting.posting_handler import posting_bp
from main.user.user_handler import user_bp
from main.search.search_handler import search_bp
from main.wishlist.wishlist_handler import wishlist_bp
from main.reviews.review_handler import review_bp
from main.recommendations.recommendations_handler import recs_bp




app = Flask(__name__)

app.register_blueprint(posting_bp, url_prefix="/posting")
app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(search_bp,url_prefix="/search")
app.register_blueprint(wishlist_bp,url_prefix="/wishlist")
app.register_blueprint(review_bp,url_prefix="/review")
app.register_blueprint(recs_bp,url_prefix="/recommendations")







if __name__ == "__main__":
    app.run(port=8000, debug=True)