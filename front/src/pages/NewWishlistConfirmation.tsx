import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/NewWishlistConfirmation.css";

const NewWishlistConfirmation = () => {
  const navigate = useNavigate();

  const goToWishlist = () => {
    navigate("/wishlist"); // Change "/wishlist" to the actual path of your wishlist page
  };

  return (
    <div className="new-listing-confirmation">
      <p>
        You've successfully saved this item to your wishlist. Return to your
        wishlist here.
      </p>
      <div className="buttons">
        <button onClick={goToWishlist} className="button white-button">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default NewWishlistConfirmation;
