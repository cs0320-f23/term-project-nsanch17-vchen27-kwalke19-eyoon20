# Backend Structure

The Flask backend is divided into several key folders:

- `app/`: Contains the main application and is subdivided into models, routes, and services.
  - `models/`: Defines data models (User, Item, Transaction).
  - `routes/`: Handles the routing of your API endpoints.
  - `services/`: Contains business logic, such as authentication, payment, and recommendations.
  - `utils/`: Utility functions and helpers.
- `tests/`: Unit tests for models, routes, and services.
- `config.py`: Configuration settings for the Flask app.
- `requirements.txt`: Lists all Python dependencies.
- `run.py`: The entry point to run the Flask application.

# Frontend Structure

The React frontend is structured to separate UI components, pages, and services.

- `public/`: Static files like HTML and favicon.
- `src/`: Contains the source code.
  - `assets/`: For static files (images, svgs, etc.)
  - `components/`: Reusable React components (e.g., Navbar, ItemGrid).
  - `pages/`: Different pages of the application (e.g., Home, Browse).
  - `services/`: Services for handling API calls and other functionalities like authentication and payments.
- `App.js` and `index.js`: Core React files.
- `routes.js`: Defines the routing for the React application.
- `package.json`: Lists npm dependencies and scripts.