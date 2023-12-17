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
          <img className="product-image" alt={posting.name} src={posting.coverPhoto} />
        </div>
        <div className="product-info">
          <div className="product-title">
            {posting.name}
          </div>
          <div className="product-description">
            {posting.description}
          </div>
          <div className="product-price">
            ${posting.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
