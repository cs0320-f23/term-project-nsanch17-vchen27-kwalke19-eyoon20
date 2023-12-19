from main.User.user_handler import user_manager
from main.Posting.posting_handler import post_manager
import dataclasses
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from nltk.corpus import stopwords


class RecommendationsManager():
    def __init__(self):
        pass

    def generate_recommendations(self,user):

        try:
            user_manager.users[user]
        except KeyError:
            return list(post_manager.postings.values())


        if len(user_manager.users[user].wishlist) == 0:
            return list(post_manager.postings.values())
        

        #import stop words that should not impact recs
        stop_words = stopwords.words("english")

        all_texts = [f"{data.name} {data.description}" for data in post_manager.postings.values()]

        tokenized_texts = [
        " ".join([word for word in nltk.word_tokenize(text.lower()) if word.isalnum() and word not in stop_words])
        for text in all_texts
    ]

        wishlist_texts = [f"{post_manager.postings[posting].name} {post_manager.postings[posting].description}" for posting in user_manager.users[user].wishlist]
        

        vectorizer = TfidfVectorizer()
        all_text_vector = vectorizer.fit_transform(tokenized_texts)
        wishlist_vector = vectorizer.transform(wishlist_texts)


        cosine_similarities = linear_kernel(wishlist_vector, all_text_vector).flatten()
        recommendations = dict(zip(post_manager.postings, cosine_similarities))

        filtered_recommendations = {posting: similarity for posting, similarity in recommendations.items() if similarity > 0}

        recs_sorted = dict(sorted((filtered_recommendations.items()), key=lambda x: x[1], reverse=True))
        return [post_manager.postings[posting] for posting in recs_sorted]
    