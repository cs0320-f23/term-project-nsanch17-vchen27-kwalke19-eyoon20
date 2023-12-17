import React, { FC } from "react";
import "../style/ProductCard.css";
import { Posting } from "../types";
interface ProductCardProps {
  posting: Posting;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ posting, onClick }) => {
  return (
    <div className="product-01" onClick={onClick}>
      <div className="divsf-pcard">
        <div className="link-responsive-image">
          <img className="ecfb9d65-a392-40b1-b9fb-f62e5a-icon" alt={posting.name} src={posting.coverPhoto} />
        </div>
        <div className="divmt-3">
          <div className="heading-3-link">
            <div className="rounded-red-hat">{posting.description}</div>
          </div>
          <div className="div4">${posting.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
