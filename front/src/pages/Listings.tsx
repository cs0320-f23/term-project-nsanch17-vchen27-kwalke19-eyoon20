import React from "react";
import { Posting } from "../types";
import "../style/Listings.css";
import NavBar from "../components/NavBar/NavBar";

interface ListingsProps {
  listings: Posting[];
}

const Listings: React.FC<ListingsProps> = ({ listings }) => {
  // ...other code

  const handleEditListing = (id: string) => {
    // logic to handle editing a listing
  };

  const handleDeleteListing = (id: string) => {
    // logic to handle deleting a listing
  };

  return (
    <div>
      <NavBar />
      <h2 className="my-listings-header">My Listings</h2>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-item">
            <img
              src={listing.coverPhoto}
              alt={listing.name}
              className="listing-cover-photo"
            />
            <div className="listing-details">
              <h2>{listing.name}</h2>
              <p>{listing.description}</p>
              <span>${listing.price.toFixed(2)}</span>
              <span>Quantity: {listing.qty}</span>
              <div className="listing-date">
                Posted on: {new Date(listing.date).toLocaleDateString()}
              </div>
              <div className="listing-buttons">
                <button className="view-listing-btn">View Listing</button>
                <button
                  className="edit-listing-btn"
                  onClick={() => handleEditListing(listing.id)}
                >
                  Edit Listing
                </button>
                <button
                  className="delete-listing-btn"
                  onClick={() => handleDeleteListing(listing.id)}
                >
                  Delete Listing
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
