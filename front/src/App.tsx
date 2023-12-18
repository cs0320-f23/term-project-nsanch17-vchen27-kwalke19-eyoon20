import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/UserProfile/Profile";
import Messaging from "./components/Messaging/Messaging";
import "./style/App.css";
import SingleItemDisplay from "./pages/SingleItemDisplay";
import ProfilePage from "./pages/ProfilePage";
import CreateNewListing from "./pages/CreateNewListing";
import NewListingConfirmation from "./pages/NewListingConfirmation";
import Listings from "./pages/Listings";
import mockListings from "./mocks/mockListings";
import Signup from "./components/SIgnUp/Signup";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { UserProvider } from "./components/UserProfile/UserContext";
import "./style/NavBar.css";
import EditListing from "./pages/EditListing";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoginStatus = localStorage.getItem("isLoggedIn");
    return savedLoginStatus === "true"; // Convert string to boolean
  });

  // Update local storage whenever isLoggedIn changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleLogin = (status: boolean | ((prevState: boolean) => boolean)) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <div className="nav">
            <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/public" element={<ProfilePage />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/single-item/" element={<SingleItemDisplay />} />
            <Route path="/create-new-listing" element={<CreateNewListing />} />
            <Route path="/edit-listing/:id" element={<EditListing />} />
            <Route
              path="/signup-login"
              element={<Signup onLogin={handleLogin} />}
            />
            <Route
              path="/new-listing-confirmation"
              element={<NewListingConfirmation />}
            />
            <Route
              path="/listings"
              element={<Listings listings={mockListings} />}
            />

            {/* Add additional routes as needed */}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
