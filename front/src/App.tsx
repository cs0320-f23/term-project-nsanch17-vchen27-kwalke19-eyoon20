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
import WishList from "./components/Wishlist";
import "./style/NavBar.css";
import EditListing from "./pages/EditListing";
import SellerPublicProfile from "./pages/SellerPublicProfile";

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

  const handlePublish = (status: boolean) => {
    // Handle the publish status as needed
    console.log("Publish status:", status);
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
            <Route
              path="/single-item/:item_name"
              element={<SingleItemDisplay />}
            />
            <Route
              path="/create-new-listing"
              element={<CreateNewListing onPublish={handlePublish} />}
            />
            <Route
              path="/edit-listing/:item_name"
              element={
                <EditListing onCancel={() => {}} onPublish={(status) => {}} />
              }
            />
            <Route path="/single-item/:index" element={<SingleItemDisplay />} />
            <Route
              path="/seller-public-profile/:sellerUsername"
              element={<SellerPublicProfile />}
            />
            <Route path="/wishlist" element={<WishList />} />

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

            {/* Add additional routes as needed */}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
