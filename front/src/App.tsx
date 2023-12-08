import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// Import the pages and components
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messaging from "./components/Messaging/Messaging";
import "./style/App.css";
import SingleItemDisplay from './pages/SingleItemDisplay';

// If you had other imports, they would go here, following the same pattern

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/single-item/" element={<SingleItemDisplay />} />
          {/* Add additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
