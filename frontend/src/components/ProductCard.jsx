import { useMemo } from "react";
import "../style/ProductCard.css";

const ProductCard = ({
  productImageName,
  productDescription,
  productPrice,
  propLeft,
  propTop,
}) => {
  const product01Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="product-01" style={product01Style}>
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
