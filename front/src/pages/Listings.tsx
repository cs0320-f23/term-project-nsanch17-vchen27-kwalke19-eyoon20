import React, { useState, useEffect } from "react";
import { Posting } from "../types";
import "../style/Listings.css";
import NavBar from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditListing from "./EditListing";

interface ListingsProps {}

const Listings: React.FC<ListingsProps> = ({}) => {
  const [listings, setListings] = useState<Posting[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch listings from the server when the component mounts
    const fetchListings = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/posting/all");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setListings(data.listings);
        } else {
          throw new Error("Failed to fetch listings");
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  console.log(listings);

  const handleEditListing = (item_name: string) => {
    // Find the listing object based on item_name
    const originalListing = listings.find(
      (listing) => listing.name === item_name
    );
    console.log;

    // Use React Router's navigate to change the route
    if (originalListing) {
      navigate(`/edit-listing/${originalListing.name}`);
    } else {
      // Handle the case where the listing is not found
      console.error("Listing not found");
    }
  };

  const handleDeleteListing = (item_name: string) => {};

  return (
    <div>
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
                  onClick={() => handleEditListing(listing.name)}
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
