import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messaging from "./components/Messaging/Messaging";
import "./style/App.css";
import SingleItemDisplay from "./pages/SingleItemDisplay";
import ProfilePage from "./pages/ProfilePage";
import CreateNewListing from "./pages/CreateNewListing";
import NewListingConfirmation from "./pages/NewListingConfirmation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/public" element={<ProfilePage />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/single-item/" element={<SingleItemDisplay />} />
          <Route path="/create-new-listing" element={<CreateNewListing />} />
          <Route path="/new-listing-confirmation" element={<NewListingConfirmation />} />
 
          {/* Add additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
