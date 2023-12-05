import ProductCard from "./ProductCard";
import "../style/RecommendedProducts.css";
import Model from "../assets/model-placeholder.png";
import Model2 from "../assets/model2-placeholder.png";

const RecommendedProductsContainer = () => {
  return (
    <div className="products">
      <ProductCard
        productImageName={Model}
        productDescription="Rounded Red Hat"
        productPrice="$8.00"
      />
      <div className="product-02">
        <div className="divsf-pcard1">
          <div className="divoverflow-hidden">
            <div className="link-responsive-image1">
              <img className="jpg-icon" alt="" src={Model2} />
            </div>
            <div className="spanprod-tag">
              <div className="sold-out">
                <p className="sold">Sold</p>
                <p className="sold">Out</p>
              </div>
            </div>
          </div>
          <div className="divmt-31">
            <div className="heading-3-link1">
              <div className="linen-blend-shirt">Linen-blend Shirt</div>
            </div>
            <div className="div5">$17.00</div>
          </div>
        </div>
      </div>
      <ProductCard
        productImageName={Model}
        productDescription="Long-sleeve Coat"
        productPrice="$106.00"
        propLeft="652px"
        propTop="0px"
      />
      <ProductCard
        productImageName={Model2}
        productDescription="Boxy Denim Hat"
        productPrice="$25.00"
        propLeft="0px"
        propTop="561.61px"
      />
      <ProductCard
        productImageName={Model}
        productDescription="Linen Plain Top"
        productPrice="$25.00"
        propLeft="326px"
        propTop="561.61px"
      />
      <div className="product-06">
        <div className="divsf-pcard1">
          <div className="link-responsive-image2">
            <img className="jpg-icon" alt="" src={Model2} />
          </div>
          <div className="divmt-32">
            <div className="heading-3-link2">
              <div className="linen-blend-shirt">Oversized T-shirt</div>
            </div>
            <div className="divf-price-sale">
              <div className="spanf-price-item">
                <div className="div6">$11.00</div>
              </div>
              <div className="strikethrough">
                <div className="div7">$14.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-07">
        <div className="divsf-pcard1">
          <div className="link-responsive-image2">
            <img className="jpg-icon" alt="" src={Model} />
          </div>
          <div className="divmt-32">
            <div className="heading-3-link3">
              <div className="linen-blend-shirt">Polarised Sunglasses</div>
            </div>
            <div className="divf-price-sale1">
              <div className="spanf-price-item">
                <div className="div6">$18.00</div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
      <ProductCard
        productImageName={Model2}
        productDescription="Rockstar Jacket"
        productPrice="$22.00"
        propLeft="326px"
        propTop="1123.22px"
      />
      <ProductCard
        productImageName={Model}
        productDescription="Dotted Black Dress"
        productPrice="$20.00"
        propLeft="652px"
        propTop="1123.22px"
      />
    </div>
  );
};

export default RecommendedProductsContainer;
