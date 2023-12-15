import pytest
from main.app import app

@pytest.fixture()
def client():
    return app.test_client()

def test_add_wishlist_success(client):
    with app.app_context():
        client.get('/user/new_user', query_string={
                "first_name": "rich",
                "last_name": "dwindle",
                "username": "rdwin",
                "email": "rdwin@aol.com",
                "profile":"/link"

        })

        posting_response = client.get('/posting/create', query_string={
                "item_name": "beanie baby rare turtle find",
                "seller_name": "rdwin",
                "price": "65.0",
                "description": "fantastic",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
        })
        
        client.get('/user/new_user', query_string={
                "first_name": "sienna",
                "last_name": "mae",
                "username": "smae",
                "email": "beaniebabylovr@aol.com",
                "profile":"/link"

        })
        response = client.get('/wishlist/add_wish', query_string={
                "posting_name": "beanie baby rare turtle find",
                "seller_name": "rdwin",
                "buyer_name": "smae",
        })
        new_data_fetch = client.get('/user/data', query_string={
            
            })
    data = response.get_json()
    posting = posting_response.get_json()

    
    assert data["added_item"]["name"] == posting["item"]["name"]
    #verify it shows up in user's wishlist
    new_data = new_data_fetch.get_json()
    assert new_data["smae"]["wishlist"]["beanie baby rare turtle find_rdwin"] == posting["item"]

def test_add_wishlist_failure(client):
    #unfound seller
    with app.app_context():
        client.get('/posting/create', query_string={
                "item_name": "beanie baby rare turtle find",
                "seller_name": "appa",
                "price": "65.0",
                "description": "fantastic",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
        })
        
        client.get('/user/new_user', query_string={
                "first_name": "sienna",
                "last_name": "mae",
                "username": "baeme",
                "email": "beaniebabylovr@aol.com",
                "profile":"/link"

        })
        response = client.get('/wishlist/add_wish', query_string={
                "posting_name": "beanie baby rare turtle find",
                "seller_name": "appa",
                "buyer_name": "smae",
        })
        
    data = response.get_json()
    assert data["error_message"] == "Unable to find seller."

    #unfound buyer
    with app.app_context():
        client.get('/user/new_user', query_string={
                "first_name": "rich",
                "last_name": "dwindle",
                "username": "swindler",
                "email": "rdwin@aol.com",
                "profile":"/link"


        })

        client.get('/posting/create', query_string={
                "item_name": "beanie baby rare turtle find",
                "seller_name": "swindler",
                "price": "65.0",
                "description": "fantastic",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
        })
        
        response = client.get('/wishlist/add_wish', query_string={
                "posting_name": "beanie baby rare turtle find",
                "seller_name": "swindler",
                "buyer_name": "kelsey",
        })

    data = response.get_json()
    assert data["error_message"] == "Unable to find buyer."
      
    #unfound listing
    with app.app_context():
        client.get('/user/new_user', query_string={
                "first_name": "rich",
                "last_name": "dwindle",
                "username": "coppaz",
                "email": "rdwin@aol.com",
                "profile":"/link"

        })
        
        client.get('/user/new_user', query_string={
                "first_name": "sienna",
                "last_name": "mae",
                "username": "checker",
                "email": "beaniebabylovr@aol.com",
                "profile":"/link"

        })
        response = client.get('/wishlist/add_wish', query_string={
                "posting_name": "random unfound item?",
                "seller_name": "coppaz",
                "buyer_name": "smae",
        })

    data = response.get_json()
    assert data["error_message"] == "Unable to find posting."
        
    #missing query
    with app.app_context():
        client.get('/user/new_user', query_string={
                "first_name": "rich",
                "last_name": "dwindle",
                "username": "rdwin",
                "email": "rdwin@aol.com",
                "profile":"/link"

        })

        client.get('/posting/create', query_string={
                "item_name": "beanie baby rare turtle find",
                "seller_name": "rdwin",
                "price": "65.0",
                "description": "fantastic",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
        })
        
        client.get('/user/new_user', query_string={
                "first_name": "sienna",
                "last_name": "mae",
                "username": "smae",
                "email": "beaniebabylovr@aol.com",
                "profile":"/link"

        })
        response = client.get('/wishlist/add_wish', query_string={
                "posting_name": "beanie baby rare turtle find",
                "seller_name": "rdwin",
    
        })
        
    data = response.get_json()
    assert data["error_message"] == "Please include all information: buyer, seller, and item."

def test_delete_wishlist(client):
    with app.app_context():
        client.get('/user/new_user', query_string={
                "first_name": "ghost",
                "last_name": "winter",
                "username": "gwinter",
                "email": "rdwin@aol.com",
                "profile":"/link"

        })

        posting_response = client.get('/posting/create', query_string={
                "item_name": "beanie baby rare turtle find",
                "seller_name": "gwinter",
                "price": "65.0",
                "description": "fantastic",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
        })
        
        client.get('/user/new_user', query_string={
                "first_name": "kelsey",
                "last_name": "mae",
                "username": "kmae",
                "email": "beaniebabylovr@aol.com",
                "profile":"/link"

        })
        client.get('/wishlist/add_wish', query_string={
                "posting_name": "beanie baby rare turtle find",
                "seller_name": "gwinter",
                "buyer_name": "kmae",
        })
        response = client.get('/wishlist/remove_wish', query_string={
                "posting_name": "beanie baby rare turtle find",
                "seller_name": "gwinter",
                "buyer_name": "kmae",
        })
        new_data_fetch = client.get('/user/data', query_string={
            
        })
    data = response.get_json()
    posting = posting_response.get_json()

    
    assert data["removed_item"]["name"] == posting["item"]["name"]
    #verify it no longer appears in user's wishlist
    new_data = new_data_fetch.get_json()
    with pytest.raises(KeyError):
        assert new_data["kmae"]["wishlist"]["beanie baby rare turtle find_gwinter"] == None