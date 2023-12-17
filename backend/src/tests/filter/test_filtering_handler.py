# import unittest
# from backend.src.main.filter.FilteringHandler import FilteringHandler

# class TestFilteringHandler(unittest.TestCase):
#     def setUp(self):
#         self.item_database = [
#             {
#                 "item_name": "Shirt",
#                 "seller_name": "Vicky",
#                 "price": 20.99,
#                 "description": "A cool shirt",
#                 "date": "2023-01-15",
#                 "type": "clothing"
#             },
#             {
#                 "item_name": "Concert Ticket",
#                 "seller_name": "Nicole",
#                 "price": 50.00,
#                 "description": "Front row ticket",
#                 "date": "2023-02-10",
#                 "type": "concert ticket"
#             },
#         ]
#         self.filter_handler = FilteringHandler(self.item_database)

#     def test_filter_by_type_clothing(self):
#         filtered_items = self.filter_handler.filter_by_type("clothing")
#         expected_items = [
#             {
#                 "item_name": "Shirt",
#                 "seller_name": "Vicky",
#                 "price": 20.99,
#                 "description": "A cool shirt",
#                 "date": "2023-01-15",
#                 "type": "clothing"
#             }
#         ]
#         self.assertEqual(filtered_items, expected_items)

#     def test_filter_by_type_concert_ticket(self):
#         filtered_items = self.filter_handler.filter_by_type("concert ticket")
#         expected_items = [
#             {
#                 "item_name": "Concert Ticket",
#                 "seller_name": "Jane Smith",
#                 "price": 50.00,
#                 "description": "Front row ticket",
#                 "date": "2023-02-10",
#                 "type": "concert ticket"
#             }
#         ]
#         self.assertEqual(filtered_items, expected_items)

#     def test_filter_by_type_nonexistent_type(self):
#         filtered_items = self.filter_handler.filter_by_type("nonexistent type")
#         expected_items = []
#         self.assertEqual(filtered_items, expected_items)

# if __name__ == '__main__':
#     unittest.main()
