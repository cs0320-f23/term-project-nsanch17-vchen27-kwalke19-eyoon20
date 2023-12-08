import React, { useMemo, FC } from "react";
import "../style/ProductCard.css";

interface ProductCardProps {
  productImageName: string;
  productDescription: string;
  productPrice: string;
  propLeft?: string;
  propTop?: string;
  onClick?: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  productImageName,
  productDescription,
  productPrice,
  propLeft,
  propTop,
  onClick,
}) => {
  const product01Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="product-01" style={product01Style} onClick={onClick}> {/* Attach onClick handler */}
      <div className="divsf-pcard">
        <div className="link-responsive-image">
          <img
            className="ecfb9d65-a392-40b1-b9fb-f62e5a-icon"
            alt=""
            src={productImageName}
          />
        </div>
        <div className="divmt-3">
          <div className="heading-3-link">
            <div className="rounded-red-hat">{productDescription}</div>
          </div>
          <div className="div4">{productPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
