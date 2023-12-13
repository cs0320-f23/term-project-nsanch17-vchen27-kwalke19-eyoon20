import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/NewListingConfirmation.css";

const NewListingConfirmation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToListing = () => {
    navigate("/listings"); // replace with the actual path to the listing
  };

  return (
    <div className="new-listing-confirmation">
      <p>You've successfully published your listing. You can check out your listing below or return home.</p>
      <div className="buttons">
        <button onClick={goToListing} className="button white-button">
          Go to Listing
        </button>
        <button onClick={goToHome} className="button white-button">
          Home
        </button>
      </div>
    </div>
  );
};

export default NewListingConfirmation;
