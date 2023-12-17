import pytest
from main.app import app

@pytest.fixture()
def client():
    return app.test_client()


def test_create_review_success(client):
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "Bridgette",
            "last_name": "Smith",
            "username": "bridgette",
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "bridgette",
            "price": "25",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
            })
        
        client.get('/user/new_user', query_string={
            "first_name": "Robet",
            "last_name": "Jenes",
            "username": "rjenes",
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        client.get('/posting/buy', query_string={
            "item_name": "Squishmallow",
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })

        review_response =client.get('/review/create', query_string={
            "rating": "1",
            "content": "The squishmallow was pretty damn dirty.",
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })

        user_data_fetch = client.get('/user/data', query_string={
            
            })
        
    review = review_response.get_json()
    user_data = user_data_fetch.get_json()

    #returned result review should equal review stored under buyer data
    assert review["review"] == user_data["bridgette"]["reviews"]["rjenes"]

def test_create_review_fail(client):
    #buyer attempting to review seller without purchasing first
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "Sigil",
            "last_name": "Rueth",
            "username": "sreuth",
            "email": "srueth@gmail.com",
            "profile":"/link"
        })

        client.get('/user/new_user', query_string={
            "first_name": "Sawyer",
            "last_name": "Hines",
            "username": "shines",
            "email": "shines@gmail.com",
            "profile":"/link"
        })

        review_response =client.get('/review/create', query_string={
            "rating": "5",
            "content": "Idk this person im bored.",
            "seller_name": "sreuth",
            "buyer_name": "shines"
        })

    review = review_response.get_json()

    assert review["error_message"] == "Listing must be purchased from the seller."

    #invalid rating

    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "Bridgette",
            "last_name": "Smith",
            "username": "bridgette",
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "bridgette",
            "price": "25",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
            })
        
        client.get('/user/new_user', query_string={
            "first_name": "Robet",
            "last_name": "Jenes",
            "username": "rjenes",
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        client.get('/posting/buy', query_string={
            "item_name": "Squishmallow",
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })

        review_response =client.get('/review/create', query_string={
            "rating": "five",
            "content": "The squishmallow was pretty damn dirty.",
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })

    review = review_response.get_json()
           
    assert review["error_message"] == "Invalid rating number given."
    
def test_delete_review_success(client):
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "Bridgette",
            "last_name": "Smith",
            "username": "bridgette",
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "bridgette",
            "price": "25",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
            })
        
        client.get('/user/new_user', query_string={
            "first_name": "Robet",
            "last_name": "Jenes",
            "username": "rjenes",
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        client.get('/posting/buy', query_string={
            "item_name": "Squishmallow",
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })

        review_response =client.get('/review/create', query_string={
            "rating": "1",
            "content": "The squishmallow was pretty damn dirty.",
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })
        
        review_response =client.get('/review/delete', query_string={
            "seller_name": "bridgette",
            "buyer_name": "rjenes"
        })

        user_data_fetch = client.get('/user/data', query_string={
            
            })
        
    review = review_response.get_json()
    user_data = user_data_fetch.get_json()

    assert len(user_data["bridgette"]["reviews"]) == 0
