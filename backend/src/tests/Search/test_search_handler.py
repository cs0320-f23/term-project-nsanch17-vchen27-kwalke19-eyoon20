import pytest
from main.app import app

@pytest.fixture()
def client():
    return app.test_client()

    
def test_search_handler_success(client):
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "savanna",
            "last_name": "roard",
            "username": "alpj",
            "email": "rdwin@aol.com",
            "profile":"/link",
            "password":"words",
            "number":"1234567891",
            "bio":"me!",
            "profile_image":"/link"

        })

        client.get('/posting/create', query_string={
            "item_name": "hair i love turtles",
            "seller_name": "alpj",
            "price": "25.0",
            "description": "fantastic",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"  
            })
        
        client.get('/posting/create', query_string={
            "item_name": "yellow_hair turtles are pretty cool",
            "seller_name": "alpj",
            "price": "25.0",
            "description": "fantastic",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"   
            })
        

        client.get('/posting/create', query_string={
            "item_name": "turtle yellow turtle",
            "seller_name": "alpj",
            "price": "4.0",
            "description": "amazon turtle",
            "qty":"5",
            "big_pic":"/link",
            "pics":"/link"   
            })
        
        search_response =  client.get('/search/search', query_string={
            "query": "hair",
            "type": "posting"
            })
        
        search_response_empty = client.get('/search/search', query_string={
            "query": "this won't be related at all",
            "type": "posting"

            })
        
       
        
        search_response_turtle = client.get('/search/search', query_string={
            "query": "please give me a turtle result",
            "type": "posting" 
            })
        
        client.get('/posting/create', query_string={
            "item_name": "turtles be fly turtle turtle turtle turtle turtle turtle",
            "seller_name": "alpj",
            "price": "4.0",
            "description": "turtle",
            "qty":"5",
            "big_pic":"/link",
            "pics":"/link"   
            })
        
        search_response_refresh = client.get('/search/search', query_string={
            "query": "please give me a turtle result",
        
            })
    
    #should filter out a result that doesn't contain the query in its description
    search = search_response.get_json()
    assert len(search["search_results"]) == 2

    #should filter out all words for a completely unrelated query
    search_empty = search_response_empty.get_json()
    assert len(search_empty["search_results"]) == 0


    #all items contain the world turtle (even if not full query) so all should be returned
    search_turtle = search_response_turtle.get_json()
    assert len(search_turtle["search_results"]) == 3

    #first result contains turtle the most, so score should be highest and therefore first in list
    assert search_turtle["search_results"][0]["name"] == "turtle yellow turtle"


    #if relevant item added to wishlist, search refresh will include it and it will be highest ranked
    search_refresh = search_response_refresh.get_json()
    assert len(search_refresh["search_results"]) == 4
    assert search_refresh["search_results"][0]["name"] == "turtles be fly turtle turtle turtle turtle turtle turtle"

