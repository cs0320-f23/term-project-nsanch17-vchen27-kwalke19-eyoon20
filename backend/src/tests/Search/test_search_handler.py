import pytest
from main.app import app
from main.search.search_handler import SearchHandler



@pytest.fixture()
def client():
    return app.test_client()

    
def test_search_handler_success(client):
     with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "rich",
            "last_name": "dwindle",
            "username": "rdwin",
            "email": "rdwin@aol.com"
        })

        client.get('/posting/create', query_string={
            "item_name": "hair i love turtles",
            "seller_name": "rdwin",
            "price": "25.0",
            "description": "fantastic",
            "qty":"1"  
            })
        
        client.get('/posting/create', query_string={
            "item_name": "yellow_hair turtles are pretty cool",
            "seller_name": "rdwin",
            "price": "25.0",
            "description": "fantastic",
            "qty":"1"  
            })
        
        client.get('/user/new_user', query_string={
            "first_name": "sarah",
            "last_name": "wilson",
            "username": "swillie",
            "email": "swil@aol.com"
        })

        client.get('/posting/create', query_string={
            "item_name": "turtle yellow turtle",
            "seller_name": "swillie",
            "price": "4.0",
            "description": "amazon turtle",
            "qty":"5"  
            })
        
        search_response =  client.get('/search/search_postings', query_string={
            "query": "hair"
            })
        
        search_response_empty = client.get('/search/search_postings', query_string={
            "query": "this won't be related at all"
            })
        
        search_response_empty = client.get('/search/search_postings', query_string={
            "query": "this won't be related at all"
            })
        
        search_response_turtle = client.get('/search/search_postings', query_string={
            "query": "please give me a turtle result"
            })
        
        #should filter out a result that doesn't contain the query in its description
        search = search_response.get_json()
        assert len(search["search_results"]) == 2

        #should filter out all words for a completely unrelated query
        search = search_response_empty.get_json()
        assert len(search["search_results"]) == 0

        #all items contain the world turtle (even if not full query) so all should be returned
        search = search_response_turtle.get_json()
        assert len(search["search_results"]) == 3

        #first result contains turtle the most, so score should be highest
        assert search["search_results"]["turtle yellow turtle_swillie"]["score"] > search["search_results"]["yellow_hair turtles are pretty cool_rdwin"]["score"]
        assert search["search_results"]["turtle yellow turtle_swillie"]["score"] > search["search_results"]["hair i love turtles_rdwin"]["score"]
        