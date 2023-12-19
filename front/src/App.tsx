import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/UserProfile/Profile";
import "./style/App.css";
import SingleItemDisplay from "./pages/SingleItemDisplay";
import PublicProfile from "./pages/PublicProfile";
import CreateNewListing from "./pages/CreateNewListing";
import NewListingConfirmation from "./pages/NewListingConfirmation";
import Listings from "./pages/Listings";
import mockListings from "./mocks/mockListings";
import Signup from "./components/SIgnUp/Signup";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import NewWishlistConfirmation from "./pages/NewWishlistConfirmation";
import { UserProvider } from "./components/UserProfile/UserContext";
import SearchResults from "./pages/SearchResults";

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
    localStorage.removeItem("userData");
  };

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/public" element={<PublicProfile />} />
            <Route path="/single-item/" element={<SingleItemDisplay />} />
            <Route path="/create-new-listing" element={<CreateNewListing />} />
            <Route path="/single-item/:index" element={<SingleItemDisplay />} />

            <Route
              path="/signup-login"
              element={<Signup onLogin={handleLogin} />}
            />
            <Route
              path="/new-listing-confirmation"
              element={<NewListingConfirmation />}
            />
            <Route
              path="/new-wishlist-confirmation"
              element={<NewWishlistConfirmation />}
            />
            <Route
              path="/listings"
              element={<Listings listings={mockListings} />}
            />
            <Route
              path="/search-results/:searchTerm"
              element={<SearchResults />}
            />
           
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
