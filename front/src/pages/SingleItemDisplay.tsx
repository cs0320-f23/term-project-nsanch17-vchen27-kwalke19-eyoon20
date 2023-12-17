import React from "react";
import "../style/SingleItemDisplay.css";
import { useNavigate, useLocation } from "react-router-dom";

import Breadcrumbs from "../components/SingleItemDisplay/Breadcrumbs";
import ProductImage from "../components/SingleItemDisplay/ProductImage";
import ProductDetails from "../components/SingleItemDisplay/ProductDetails";
import Reviews from "../components/SingleItemDisplay/Reviews";

const SingleItemDisplay = () => {
  const location = useLocation();
  const posting = location.state?.posting;
  const navigate = useNavigate();
  
  const handleWishlistClick = () => navigate("/new-wishlist-confirmation");

  
  if (!posting) {
    // handle the case where the data is not available
    return <div>No product data available</div>;
  }

  return (
    <>
      <div className="item-container">
        <section className="left-side">
          <Breadcrumbs
            crumbs={[
              { label: "Clothes", link: "/clothes" },
              { label: "Shirts", link: "/clothes/shirts" },
              // ... You can add as many as you need
            ]}
          />
          <ProductImage />
        </section>
        <section className="right-side">
        <ProductDetails posting={posting} />
        <button onClick={handleWishlistClick} className="button white-button">
          Add to Wishlist
        </button>
        </section>
      </div>
      <Reviews />
    </>
  );
};

export default SingleItemDisplay;
