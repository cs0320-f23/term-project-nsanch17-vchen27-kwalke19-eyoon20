import React from 'react';
import "../../style/SingleItemDisplay.css"
import Model from "../../assets/model2-placeholder.png"; // Make sure the path is correct

const ProductImage = () => {
  // The image URL is being imported from your assets and used in the img tag
  return (
    <div className="product-image-container">
      <img src={Model} alt="Product" className="product-image" />
    </div>
  );
};

export default ProductImage;
