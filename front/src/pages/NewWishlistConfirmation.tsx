import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/NewWishlistConfirmation.css";

const NewWishlistConfirmation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };


  return (
    <div className="new-listing-confirmation">
      <p>You've successfully saved this item to your wishlist. Return home here.</p>
      <div className="buttons">
        <button onClick={goToHome} className="button white-button">
          Home
        </button>
      </div>
    </div>
  );
};

export default NewWishlistConfirmation;
