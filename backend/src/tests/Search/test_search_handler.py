# import unittest
# from flask import Flask, request
# from unittest.mock import patch
# from backend.src.main.Search.SearchHandler import SearchHandler

# class TestSearchHandler(unittest.TestCase):

#     def setUp(self):
#         self.app = Flask(__name__)

#     @patch('SearchHandler.request')
#     def test_search_handler(self, mock_request):
#         # Mock request data
#         mock_request.args.get.return_value = 'phone'
#         # You might need to adjust the request mocking based on how your search handler reads data from the request

#         # Mock data in the item_database (assuming your search handler uses a database)
#         item_data_1 = {
#             "item_name": "Phone",
#             "seller_name": "John",
#             "price": "500",
#             "description": "Smartphone",
#             "date": "2023-01-01"
#         }

#         item_data_2 = {
#             "item_name": "Laptop",
#             "seller_name": "Alice",
#             "price": "1000",
#             "description": "Powerful laptop",
#             "date": "2023-01-02"
#         }

#         item_data_3 = {
#             "item_name": "Tablet",
#             "seller_name": "Bob",
#             "price": "300",
#             "description": "Portable tablet",
#             "date": "2023-01-03"
#         }

#         item_database = {
#             "Phone_John_2023-01-01": item_data_1,
#             "Laptop_Alice_2023-01-02": item_data_2,
#             "Tablet_Bob_2023-01-03": item_data_3
#         }

#         # Set the mocked item_database in the SearchHandler
#         SearchHandler.item_database = item_database

#         # Call the handle_search method
#         response = SearchHandler.handle_search()

#         # Check the response status code
#         self.assertEqual(response.status_code, 200)

#         # Check the response JSON content
#         response_json = response.get_json()
#         self.assertIn('search_results', response_json)
#         search_results = response_json['search_results']

#         # Check if search results are as expected
#         self.assertEqual(len(search_results), 1)
#         self.assertEqual(search_results[0]['item'], item_data_1)

#         # Add more specific assertions based on your expected results

# if __name__ == '__main__':
#     unittest.main()