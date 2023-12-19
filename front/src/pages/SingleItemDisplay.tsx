import React from "react";
import { useLocation } from "react-router-dom";
import "../style/SingleItemDisplay.css";
import NavBar from "../components/NavBar/NavBar";
import Breadcrumbs from "../components/SingleItemDisplay/Breadcrumbs";
import ActionButton from "../components/SingleItemDisplay/ActionButton";
import Reviews from "../components/SingleItemDisplay/Reviews";

const SingleItemDisplay = () => {
  // Use the useLocation hook to access the state passed via the route
  const location = useLocation();
  const { selectedListing } = location.state || {};

  const handleLogout = () => {
    // Your logout logic here
  };

  // Check if selectedListing is available
  if (!selectedListing) {
    return <div>Loading...</div>; // You can replace this with an appropriate loading component
  }

  return (
    <>
      <NavBar isLoggedIn={true} onLogout={handleLogout} />
      <div className="item-container">
        <section className="left-side">
          <Breadcrumbs
            crumbs={[
              { label: "Clothes", link: "/clothes" },
              { label: "Shirts", link: "/clothes/shirts" },
              // ... You can add as many as you need
            ]}
          />
          <div className="product-image-container">
            <img
              src={`http://127.0.0.1:8000/posting/posting_pictures/${selectedListing.picture}`}
              alt={selectedListing.name}
              className="product-image"
            />
          </div>
        </section>
        <section className="right-side">
          <div className="product-details">
            <h2>{selectedListing.name}</h2>
            <p>{selectedListing.description}</p>
            <span>
              $
              {typeof selectedListing.price === "number"
                ? selectedListing.price.toFixed(2)
                : selectedListing.price}
            </span>
            <span>Quantity: {selectedListing.qty}</span>
            <div className="listing-date">
              Posted on: {new Date(selectedListing.date).toLocaleDateString()}
            </div>
          </div>
          <ActionButton text="Wishlist" type="wishlist" />
          <ActionButton text="Message" type="message" />
        </section>
      </div>
      <Reviews />
    </>
  );
};

export default SingleItemDisplay;
