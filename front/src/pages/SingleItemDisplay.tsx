import React, { useState, useEffect } from "react";
import { Posting } from "../types";
import "../style/SingleItemDisplay.css";
import { useNavigate, useLocation } from "react-router-dom";

import Breadcrumbs from "../components/SingleItemDisplay/Breadcrumbs";
import ProductImage from "../components/SingleItemDisplay/ProductImage";
import ProductDetails from "../components/SingleItemDisplay/ProductDetails";
import Reviews from "../components/SingleItemDisplay/Reviews";
import { useUser } from "../components/UserProfile/UserContext";

const SingleItemDisplay = () => {
  const location = useLocation();
  const posting = location.state?.posting;
  const navigate = useNavigate();
  const { user } = useUser();

  const handleWishlistClick = async () => {
    console.log(posting?.name, user?.username, posting?.seller);
    console.log(posting?.seller);
    try {
      const response = await fetch("http://127.0.0.1:8000/wishlist/add_wish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posting_name: posting?.name,
          buyer_name: user?.username,
          seller_name: posting?.seller,
        }),
      });
      console.log(response);

      if (response.ok) {
        navigate("/new-wishlist-confirmation");
      } else {
        console.error("Failed to add item to wishlist", response);
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };

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
      {/* <Reviews /> */}
    </>
  );
};

export default SingleItemDisplay;
