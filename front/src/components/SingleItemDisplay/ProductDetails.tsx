import React from 'react';

const ProductDetails = ({ posting }) => {
  const { name, price, description } = posting;

  return (
    <div className="product-details">
      <h1 className="product-title">{name}</h1>
      <p className="product-price">${price.toFixed(2)}</p>
      <div className="product-description">
        {description}
      </div>
    </div>
  );
};

export default ProductDetails;
