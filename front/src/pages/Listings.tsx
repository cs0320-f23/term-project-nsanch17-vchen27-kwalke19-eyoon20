import React from "react";
import { Posting } from "../types";
import "../style/Listings.css";

interface ListingsProps {
  listings: Posting[];
}

const Listings: React.FC<ListingsProps> = ({ listings }) => {

  const handleDeleteListing = async (listing: Posting) => {

    try {
      const response = await fetch('http://localhost:8000/posting/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          item_name: listing.name,
          seller_name: listing.seller.username
        })
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Delete successful', result);
        // Handle successful deletion (e.g., update state or UI)
      } else {
        throw new Error('Failed to delete listing');
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <h2 className="my-listings-header">My Listings</h2>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={`${listing.name}_${listing.seller.username}`} className="listing-item">
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
                  onClick={() => {/* logic to handle edit */}}
                >
                  Edit Listing
                </button>
                <button
                  className="delete-listing-btn"
                  onClick={() => handleDeleteListing(listing)}
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
