import pytest
from main.app import app

@pytest.fixture()
def client():
    return app.test_client()

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
            "email": "smith@gmail.com",
            "profile":"/link"
        })

        response = client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "sarbar",
            "price": "25",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
            })
        
        new_data_fetch = client.get('/user/data', query_string={
            
            })
        
        data = response.get_json()
    
        print(data)
        new_data = new_data_fetch.get_json()
    
    
    #all user information should be correctly presented
    assert data["item"]["name"] == "Squishmallow"
    assert data["item"]["seller"] == "sarbar"
    assert data["item"]["price"]== 25.0
    assert data["item"]["description"]== "Pretty new...a few mysterious stains lol"
    assert data["item"]["qty"]== 1

    #listing should exist for seller and be equal to the original listing
    assert new_data["sarbar"]["sellings"]["Squishmallow_sarbar"] == data["item"]

   
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
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"
            })
    data = response.get_json()
    #Since user did not exist, error response given
    assert data["error_message"] == "User does not exist."
    
    #a new instance of Posting should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["item"]["item_name"] == None
        assert data["item"]["seller_name"] == None

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
        assert data["item"]["item_name"] == None
        assert data["item"]["seller_name"] == None

    #Invalid number inputs will lead to the posting not being created
    response = client.get('/posting/create', query_string={
        "item_name": "Taffy",
        "seller_name": "ogrant",
        "price": "bbbb",
        "description": "Pretty new...a few mysterious stains lol",
        "qty":"a",
        "big_pic":"/link",
        "pics":"/link"  
        })
    data = response.get_json()

    assert data["error_message"] == "Invalid values given. Please use valid numbers for price and quantity."
    
    #a new instance of Posting should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["item"]["item_name"] == None
        assert data["item"]["seller_name"] == None

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
            "email": "smith@gmail.com",
            "profile":"/link"

        })

        client.get('/posting/create', query_string={
        "item_name": "Headband",
        "seller_name": "hreed",
        "price": "89",
        "description": "Pretty new...a few mysterious stains lol",
        "qty":"1",
        "big_pic":"/link",
        "pics":"/link" 
        })

        response = client.get('/posting/create', query_string={
        "item_name": "Headband",
        "seller_name": "hreed",
        "price": "36",
        "description": "Enjoy this.",
        "qty":"2",
        "big_pic":"/link",
        "pics":"/link" 
        })
        
        user_data_fetch = client.get('/user/data', query_string={
            
            })
    

    data = response.get_json()
    user_data = user_data_fetch.get_json()

    
    #An error message will be given based on the attempt to replace the current username
    assert data["error_message"] == "Please create a new name for your listing."
    

    #In the user dictionary, the posting will point to the original.
    assert user_data["hreed"]["sellings"]["Headband_hreed"]["price"] == 89.0
    assert user_data["hreed"]["sellings"]["Headband_hreed"]["qty"] == 1

    
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
            "email": "lwww@gmail.com",
            "profile":"/link"

        })

        item_response = client.get('/posting/create', query_string={
            "item_name": "Tap shoes",
            "seller_name": "kittens",
            "price": "89",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
        })

        response = client.get("/posting/delete", query_string={
            "item_name": "Tap shoes",
            "seller_name": "kittens",
        })

    data = response.get_json()
    item = item_response.get_json()
   
    assert data["message"] == "Item deleted successfully"
    assert data["deleted_item"] == item["item"]

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
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
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
            "email": "smith@gmail.com",
            "profile":"/link"

        })

        client.get('/posting/create', query_string={
            "item_name": "Squishmallow",
            "seller_name": "ajjj",
            "price": "89",
            "description": "Pretty new...a few mysterious stains lol",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
        })

        modify_response = client.get('/posting/modify', query_string={
            "item_name": "Squishmallow",
            "seller_name": "ajjj",
            "attribute": "price",
            "new_value": "90"
   
        })

        user_data_fetch = client.get('/user/data', query_string={
            
            })

    modified = modify_response.get_json()
    user_data = user_data_fetch.get_json()

    #price in returned modified item should equal price in user's sellings dict
    assert modified["updated_item"]["price"] == user_data["ajjj"]["sellings"]["Squishmallow_ajjj"]["price"]

def test_modify_fail(client):
        '''
        These tests check that malformed attempts to modify a posting are handled gracefully under several cases.
        '''
        #Created item unsuccessfully, so it won't be found and can't be modified
        with app.app_context():
            client.get('/posting/create', query_string={
                "item_name": "Haunted creepy Doll",
                "seller_name": "help",
                "price": "5",
                "description": "This doll is haunted...please take it I'm willing to lower the price.",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
            })

            modify_response = client.get('/posting/modify', query_string={
                "item_name": "Haunted creepy Doll",
                "seller_name": "help",
                "attribute": "price",
                "new_value": "0"
    
            })

        data = modify_response.get_json()

        assert data["error_message"] == "Item with key Haunted creepy Doll_help not found"

    #Created item successfully but incorrect name used to retrieve it, still won't be found
        with app.app_context():

            client.get('/user/new_user', query_string={
                "first_name": "Savannah",
                "last_name": "Reed",
                "username": "help",
                "email": "pleasetakethisdoll@gmail.com",
                "profile":"/link"

            })
            
            client.get('/posting/create', query_string={
                "item_name": "Haunted creepy Doll",
                "seller_name": "help",
                "price": "5",
                "description": "This doll is haunted...please take it I'm willing to lower the price.",
                "qty":"1",
                "big_pic":"/link",
                "pics":"/link"  
            })

            modify_response = client.get('/posting/modify', query_string={
                "item_name": "Amazing doll",
                "seller_name": "help",
                "attribute": "price",
                "new_value": "0"
            })

            modify_response_illegal =  client.get('/posting/modify', query_string={
                "item_name": "Haunted creepy Doll",
                "seller_name": "help",
                "attribute": "date",
                "new_value": "today lol"
            })


            data = modify_response.get_json()
            assert data["error_message"] == "Item with key Amazing doll_help not found"

    #Attempting to modify a field that can't be changed
        data_illegal = modify_response_illegal.get_json()
        assert data_illegal["error_message"] == "Cannot change the following property: date."
      

def test_purchase(client):
    with app.app_context():
        client.get('/user/new_user', query_string={
            "first_name": "Kelson",
            "last_name": "James",
            "username": "kjojames",
            "email": "jelson@gmail.com",
            "profile":"/link"

        })
        
        posting_response = client.get('/posting/create', query_string={
            "item_name": "Beyonce tickets",
            "seller_name": "kjojames",
            "price": "500",
            "description": "Trust me..you want this.",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
        })

        client.get('/user/new_user', query_string={
            "first_name": "Robbie",
            "last_name": "Robber",
            "username": "doubr",
            "email": "rob@gmail.com",
            "profile":"/link"

        })

        purchase_response = client.get('/posting/buy', query_string={
            "item_name": "Beyonce tickets",
            "seller_name": "kjojames",
            "buyer_name": "doubr"
        })

        user_data_fetch = client.get('/user/data', query_string={
            
            })

    posting = posting_response.get_json()
    purchase = purchase_response.get_json()
    user_data = user_data_fetch.get_json()

    
    #The original purchase item value will not be updated to for sale
    assert purchase["purchased_item"]["status"] != posting["item"]["status"]
    #Should be updated in user dictionary
    assert purchase["purchased_item"]["status"]  == user_data["doubr"]["purchases"]["Beyonce tickets_kjojames"]["status"]
    
    del user_data["doubr"]["purchases"]["Beyonce tickets_kjojames"]["status"]
    del posting["item"]["status"]

    #removing the status from the orginal fetched item and updated purchased version should lead to item being the same 
    assert user_data["doubr"]["purchases"]["Beyonce tickets_kjojames"] == posting["item"]



    
    