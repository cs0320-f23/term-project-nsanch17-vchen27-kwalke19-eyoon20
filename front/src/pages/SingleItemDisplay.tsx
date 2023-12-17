import React from "react";
import "../style/SingleItemDisplay.css";
import NavBar from "../components/NavBar/NavBar";
import Breadcrumbs from "../components/SingleItemDisplay/Breadcrumbs";
import ProductImage from "../components/SingleItemDisplay/ProductImage";
import ProductDetails from "../components/SingleItemDisplay/ProductDetails";
import ActionButton from "../components/SingleItemDisplay/ActionButton";
import Reviews from "../components/SingleItemDisplay/Reviews";

const SingleItemDisplay = () => {
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
          <ProductDetails />
          <ActionButton text="Wishlist" type="wishlist" />
          <ActionButton text="Message" type="message" />
        </section>
      </div>
      <Reviews />
    </>
  );
};

export default SingleItemDisplay;
