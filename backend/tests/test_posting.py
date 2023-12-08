import requests

url = "http://127.0.0.1:5000/posting"  # Adjust the URL if your Flask app is running on a different host or port

# Example data (replace with your actual data)
params = {
    "name": "Mocked Item",
    "price": "100",
    "description": "This is a mocked item",
    "date_posted": "2023-12-07"
}

response = requests.get(url, params=params)

print("Response status code:", response.status_code)
print("Response JSON:", response.json())