import pytest
from main.app import app

@pytest.fixture()
def client():
    return app.test_client()

def test_recomendations(client):
    with app.app_context():

        client.get('/user/new_user', query_string={
            "first_name": "john",
            "last_name": "doe",
            "username": "johndoe",
            "email": "johndoe@example.com",
            "profile": "/link"
        })

        client.get('/user/new_user', query_string={
            "first_name": "jane",
            "last_name": "smith",
            "username": "janesmith",
            "email": "janesmith@example.com",
            "profile": "/link"
        })

        # first posting for the first user - relates to recs algorithm
        client.get('/posting/create', query_string={
            "item_name": "vintage vinyl record",
            "seller_name": "johndoe",
            "price": "30.0",
            "description": "classic hits",
            "qty": "1",
            "big_pic": "/link",
            "pics": "/link"
        })

         # second posting for the first user - not related to recs algorithm
        client.get('/posting/create', query_string={
            "item_name": "funky hat fuzzy",
            "seller_name": "johndoe",
            "price": "30.0",
            "description": "beauitful condition pom pom hat",
            "qty": "1",
            "big_pic": "/link",
            "pics": "/link"
        })


        #second posting for the second user
        client.get('/posting/create', query_string={
            "item_name": "antique pocket watch",
            "seller_name": "janesmith",
            "price": "50.0",
            "description": "precise timekeeping",
            "qty": "1",
            "big_pic": "/link",
            "pics": "/link"
        })

        #second posting for second user, related to recs algorithm
        client.get('/posting/create', query_string={
            "item_name": "antique classic leather jacket",
            "seller_name": "janesmith",
            "price": "50.0",
            "description": "beauitful faux leather classic and amazing!!",
            "qty": "1",
            "big_pic": "/link",
            "pics": "/link"
        })

        #third user for recs
        client.get('/user/new_user', query_string={
            "first_name": "alice",
            "last_name": "wonderland",
            "username": "alicewonder",
            "email": "alicewonder@example.com",
            "profile": "/link"
        })

        #second posting to the wishlist of the third user
        client.get('/wishlist/add_wish', query_string={
            "posting_name": "antique pocket watch",
            "seller_name": "janesmith",
            "buyer_name": "alicewonder",
        })

        response = client.get('/recommendations/generate', query_string={
            "user": "alicewonder",
            
        })

    data = response.get_json()

    #2 postings dont contain any words relevant to the original
    assert len(data["recommendations"]) == 2

    # these listings don contain relevant terms in their item name or des
    assert "funky hat fuzzy_johndoe" not in data["recommendations"]
    assert "vintage vinyl record_johndoe" not in data["recommendations"] 

    
    assert "antique pocket watch_janesmith" in data["recommendations"]
    assert "antique classic leather jacket_janesmith" in data["recommendations"]




    

