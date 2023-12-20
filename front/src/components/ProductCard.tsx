import React, { FC } from "react";
import "../style/ProductCard.css";
import { Posting } from "../types";

interface ProductCardProps {
  posting: Posting;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ posting, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-container">
        <div className="product-image-wrapper">
          <img
            src={`http://127.0.0.1:8000/posting/posting_pictures/${posting.picture}`} // Assuming server serves static files at this path
            alt={posting.name}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <div className="product-title">{posting.name}</div>
          <div className="product-description">{posting.description}</div>
          <div className="product-price">
            $
            {typeof posting.price === "number"
              ? posting.price.toFixed(2)
              : posting.price}
          </div>
          <div className="product-price" id="qty">
            Qty: {posting.qty}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
