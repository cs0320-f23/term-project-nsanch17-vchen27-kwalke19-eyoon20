import pytest
import json
from flask import Flask, request

from main.app import app
from main.User.user_manager import User

from datetime import datetime

@pytest.fixture()
def client():
    return app.test_client()

def test_create_user_profile_success(client):
    '''
    These tests check that the standard cretion of a User via a call to the endpoint
    produces the expected results. It checks that all query parameters
    have been properly assigned to their corresponding field in the User dataclass,
    and that there is no prefilled information associated with a user profile.
    '''
   
    response = client.get('/user/new_user', query_string={
        "first_name": "John",
        "last_name": "Doe",
        "username": "jdo",
        "email": "jdoe@gmail.com"
    })
    data = response.get_json()
    #no sellings should exist prior to making a posting
    assert data["sellings"] == {}
    
    #all user information should be correctly presented
    assert data["first_name"] == "John"
    assert data["last_name"] == "Doe"
    assert data["username"] == "jdo"
    assert data["email"] == "jdoe@gmail.com"



    assert response.status_code == 200
    assert data['result'] == 'success'
   
def test_create_user_profile_failure(client):
    '''
    These tests check that poorly structured calls to the endpoint
    lead to appropriate error messages being returned.
    '''

    response = client.get('/user/new_user', query_string={
        "first_name": "John",
        "last_name": "Doe",
       
    })
    data = response.get_json()
    #Since at least one piece of information was missing from the query, error response given

    assert data["error_message"] == "Missing parameters"
    
    #a new instance of User should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["first_name"] == None
        assert data["last_name"] == None

    assert response.status_code == 400
    assert data['result'] == 'error'

def test_create_user_profile_existing(client):
    '''
    This tests that attempts to create a new User with an already existing
    username will fail.
    '''

    with app.app_context():
        client.get('/user/new_user', query_string={
            "first_name": "John",
            "last_name": "Doe",
            "username": "jdo",
            "email": "jdoe@gmail.com"
        })

        response = client.get('/user/new_user', query_string={
            "first_name": "Sarah",
            "last_name": "Smith",
            "username": "jdo",
            "email": "smith@gmail.com"
        })

        data_response = client.get("/user/data")

    data = response.get_json()
    data_response_json = data_response.get_json()
    #An error message will be given based on the attempt to replace the current username
    assert data["error_message"] == "User already exists. Try again."

    #In the user dictionary, the username will point to the original.
    data_response_json["jdo"]["first_name"] = "John"
    


    #a new instance of User should not be created, so no key for this information should exist
    with pytest.raises(KeyError):
        assert data["first_name"] == None
        assert data["last_name"] == None

    # assert data_response_json[]
    assert response.status_code == 400
    assert data['result'] == 'error'
