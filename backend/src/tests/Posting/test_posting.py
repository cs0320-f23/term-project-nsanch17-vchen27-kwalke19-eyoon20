import pytest
import json
from flask import Flask, request

from main.app import app
from main.User.user_manager import User

from datetime import datetime

@pytest.fixture()
def client():
    with app.app_context():
        yield app.test_client()

def test_create_posting_success(client):
    '''
    These tests check that the standard cretion of a listing via a call to the endpoint
    produces the expected results. It checks that all query parameters
    have been properly assigned to their corresponding field in the Posting dataclass.
    '''
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "Sarah",
            "last_name": "Smith",
            "username": "sarbar",
            "email": "smith@gmail.com"
        })

        response = client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "sarbar",
            "price": "25",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1"  
            })
        
        new_data_fetch = client.get('/user/data', query_string={
            
            })
        
        data = response.get_json()
        #stored listings under a seller don't contain the result of sending data to server
        del data["result"]
        print(data)
        new_data = new_data_fetch.get_json()
    
    
    #all user information should be correctly presented
    assert data["name"] == "Squishmallow"
    assert data["seller"] == "sarbar"
    assert data["price"]== 25.0
    assert data["description"]== "Pretty new...a few mysterious stains lol"
    assert data["qty"]== 1

    #listing should exist for seller and be equal to the original listing
    assert new_data["sarbar"]["sellings"]["Squishmallow"] == data

   
def test_create_posting_failure(client):
    '''
    These tests check that poorly structured calls to the endpoint
    lead to appropriate error messages being returned.
    '''

    #listings cannot be created if the seller does not exist
    response = client.get('/posting/create', query_string={
            "item_name": "Taffy",
            "seller_name": "ogrant",
            "price": "25",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1"  
            })
    data = response.get_json()
    #Since user did not exist, error response given
    assert data["error_message"] == "User not found."
    
    #a new instance of Posting should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["item_name"] == None
        assert data["seller_name"] == None

    assert response.status_code == 400
    assert data['result'] == 'error'


    #Queries with missing information will lead to the posting not being created
    response = client.get('/posting/create', query_string={
        "item_name": "Taffy",
        "seller_name": "ogrant", 
        })
    data = response.get_json()
    #Since at least one piece of information was missing from the query, error response given
    assert data["error_message"] == "Missing parameters. Please give a valid title, price, description, and seller username."
    
    #a new instance of Posting should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["item_name"] == None
        assert data["seller_name"] == None

    #Invalid number inputs will lead to the posting not being created
    response = client.get('/posting/create', query_string={
        "item_name": "Taffy",
        "seller_name": "ogrant",
        "price": "bbbb",
        "description": "Pretty new...a few mysterious stains lol",
        "qty":"a"  
        })
    data = response.get_json()

    assert data["error_message"] == "Invalid values given. Please use valid numbers for price and quantity."
    
    #a new instance of Posting should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["item_name"] == None
        assert data["seller_name"] == None

def test_create_posting_existing(client):
    '''
    This tests that attempts to posting under a user that already contains one by that name 
    will fail. 
    '''

    with app.app_context():
        client.get('/user/new_user', query_string={
            "first_name": "Hailey",
            "last_name": "Reed",
            "username": "hreed",
            "email": "smith@gmail.com"
        })

        client.get('/posting/create', query_string={
        "item_name": "Headband",
        "seller_name": "hreed",
        "price": "89",
        "description": "Pretty new...a few mysterious stains lol",
        "qty":"1"  
        })

        response = client.get('/posting/create', query_string={
        "item_name": "Headband",
        "seller_name": "hreed",
        "price": "36",
        "description": "Enjoy this.",
        "qty":"2"  
        })
        
        user_data_fetch = client.get('/user/data', query_string={
            
            })
    

    data = response.get_json()
    user_data = user_data_fetch.get_json()

    
    #An error message will be given based on the attempt to replace the current username
    assert data["error_message"] == "Item already created under this name."
    

    #In the user dictionary, the posting will point to the original.
    assert user_data["hreed"]["sellings"]["Headband"]["price"] == 89.0
    assert user_data["hreed"]["sellings"]["Headband"]["qty"] == 1

    
    assert response.status_code == 400
    assert data['result'] == 'error'

def test_delete_success(client):
    '''
    These tests ensure that deletion of a posting under the correct conditions is handled
    accordingly.
    '''

    with app.app_context():
        client.get('/user/new_user', query_string={
            "first_name": "Lorelei",
            "last_name": "W",
            "username": "kittens",
            "email": "lwww@gmail.com"
        })

        item_response = client.get('/posting/create', query_string={
            "item_name": "Tap shoes",
            "seller_name": "kittens",
            "price": "89",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1"  
        })

        response = client.get("/posting/delete", query_string={
            "item_name": "Tap shoes",
            "seller_name": "kittens",
        })

    data = response.get_json()
    item = item_response.get_json()
    del item["result"]
    assert data["message"] == "Item deleted successfully"
    assert data["deleted_item"] == item

def test_delete_fail(client):
    '''
    This tests for cases that would cause an error response instead of the expected,
    such as attempting to delete a nonexistent item, either after attempting to add ir
    or without previous attempts to add it.
    '''

    #error in response to deleting never-created item
    response = client.get("/posting/delete", query_string={
        "item_name": "Squishmallow",
        "seller_name": "jdo",
        })
    
    data = response.get_json()
    assert data["error_message"] == "Item with key Squishmallow_jdo not found" 

    #attempt to delete following failed attempt to create item
    with app.app_context():
        client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "jdo",
            "price": "89",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1"  
        })

        response = client.get("/posting/delete", query_string={
            "item_name": "Squishmallow",
            "seller_name": "jdo",
            })
        
    data = response.get_json()
    assert data["error_message"] == "Item with key Squishmallow_jdo not found" 

def test_modify_success(client):
    '''
    Tests check for correct modification of a posting
    '''
    
    with app.app_context():
        client.get('/user/new_user', query_string={
            "first_name": "Ally",
            "last_name": "Johnson",
            "username": "ajjj",
            "email": "smith@gmail.com"
        })

        item_response = client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "ajjj",
            "price": "89",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1"  
        })

        modify_response = client.get('/posting/modify', query_string={
            "item_name": "Squishmallow",
            "seller_name": "ajjj",
            "attribute": "price",
            "new_value": "90"
   
        })

        user_data_fetch = client.get('/user/data', query_string={
            
            })

    item = item_response.get_json()
    modified = modify_response.get_json()
    user_data = user_data_fetch.get_json()

    assert modified["updated_item"]["price"] == user_data["ajjj"]["sellings"]["Squishmallow"]["price"]

    