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
            "profile":"/link"

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
        
        search_response_empty = client.get('/search/search', query_string={
            "query": "this won't be related at all",
            "type": "posting"
            })
        
        search_response_turtle = client.get('/search/search', query_string={
            "query": "please give me a turtle result",
            "type": "posting" 
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

    #first result contains turtle the most, so score should be highest
    assert search_turtle["search_results"]["turtle yellow turtle_alpj"]["score"] > search_turtle["search_results"]["yellow_hair turtles are pretty cool_alpj"]["score"]
    assert search_turtle["search_results"]["turtle yellow turtle_alpj"]["score"] > search_turtle["search_results"]["hair i love turtles_alpj"]["score"]

def test_search_handler_fail(client):
    #incorrect search format
  
    with app.app_context():
        client.get('/user/new_user', query_string={
            "first_name": "rich",
            "last_name": "dwindle",
            "username": "rdwin",
            "email": "rdwin@aol.com",
            "profile":"/link"

        })

        client.get('/posting/create', query_string={
            "item_name": "hair i love turtles",
            "seller_name": "rdwin",
            "price": "25.0",
            "description": "fantastic",
            "qty":"1",
            "big_pic":"/link",
            "pics":"/link"   
            })
        
        search_response =  client.get('/search/search', query_string={
            "query": "hair",
            })
        
        search_response_illegal =  client.get('/search/search', query_string={
            "query": "today",
            "type":"date"
            })
        
        
    search = search_response.get_json()
    assert search["error_message"] == "Missing query parameter. Please input a searchquery and indicate if searching for user or posting."
    
    #invalid search attempt 
    search = search_response_illegal.get_json()
    assert search["error_message"] == "Search queries can only be for a posting or user. Please indicate one."



def test_search_user_success(client):
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "caroline",
            "last_name": "james",
            "username": "olinecaro",
            "email": "cjjj@aol.com",
            "profile":"/link"

        })

        client.get('/user/new_user', query_string={
            "first_name": "riuy",
            "last_name": "ponb",
            "username": "rieu",
            "email": "rieu@aol.com",
            "profile":"/link"

        })

        client.get('/user/new_user', query_string={
            "first_name": "keo",
            "last_name": "rikley",
            "username": "keor",
            "email": "rikleykeo@aol.com",
            "profile":"/link"

        })

        client.get('/user/new_user', query_string={
            "first_name": "polly",
            "last_name": "truth",
            "username": "optruth",
            "email": "jimmy@aol.com",
            "profile":"/link"

        })

        search_response =  client.get('/search/search', query_string={
            "query": "olinecaro",
            "type":"user"
        })
        
        search_response_broad =  client.get('/search/search', query_string={
            "query": "o",
            "type":"user"
        })

        search_response_empty =  client.get('/search/search', query_string={
            "query": "kamiedw",
            "type":"user"
        })
        
    #specific username search would return only the 1 user
    search = search_response.get_json()
    assert len(search["search_results"]) == 1

    #broad search returns all fitting users
    search = search_response_broad.get_json()
    assert len(search["search_results"]) == 3

    #search that returns no results
    search = search_response_broad.get_json()
    assert len(search["search_results"]) == 3


    #this listing will not even show up in search results, should be none
    search = search_response_empty.get_json()
    assert len(search["search_results"]) == 0


    with pytest.raises(KeyError):
       assert search["search_results"]["rieu"]["score"] == 0 


