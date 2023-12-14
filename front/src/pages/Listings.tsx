import React from "react";
import { Posting } from "../types";
import "../style/Listings.css";
import NavBar from "../components/NavBar/NavBar";

interface ListingsProps {
  listings: Posting[];
}

const Listings: React.FC<ListingsProps> = ({ listings }) => {
  return (
    <div>
      <NavBar />
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing">
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
              <span>Posted on: {listing.date}</span>
              <button className="view-listing-btn">View Listing</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
