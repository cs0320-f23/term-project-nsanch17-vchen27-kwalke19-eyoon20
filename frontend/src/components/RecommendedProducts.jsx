import ProductCard from "./ProductCard";
import "../style/RecommendedProducts.css";

const RecommendedProductsContainer = () => {
  return (
    <div className="products">
      <ProductCard
        productImageName="/49-ecfb9d65a39240b1b9fbf62e5a84f812jpg@2x.png"
        productDescription="Rounded Red Hat"
        productPrice="$8.00"
      />
      <div className="product-02">
        <div className="divsf-pcard1">
          <div className="divoverflow-hidden">
            <div className="link-responsive-image1">
              <img className="jpg-icon" alt="" src="/57jpg@2x.png" />
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
        productImageName="/59jpg@2x.png"
        productDescription="Long-sleeve Coat"
        productPrice="$106.00"
        propLeft="652px"
        propTop="0px"
      />
      <ProductCard
        productImageName="/54-8558553ca9dd4474bc2b6707343dacbejpg@2x.png"
        productDescription="Boxy Denim Hat"
        productPrice="$25.00"
        propLeft="0px"
        propTop="561.61px"
      />
      <ProductCard
        productImageName="/53-bc12317de94140979fd8cc529c2b0cf1jpg@2x.png"
        productDescription="Linen Plain Top"
        productPrice="$25.00"
        propLeft="326px"
        propTop="561.61px"
      />
      <div className="product-06">
        <div className="divsf-pcard1">
          <div className="link-responsive-image2">
            <img
              className="jpg-icon"
              alt=""
              src="/52-bec0360d64e54b79bb889b2dc30f34a2jpg@2x.png"
            />
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
            <img
              className="jpg-icon"
              alt=""
              src="/46-145a4ab07b97409ab0493768fd0e7a10jpg@2x.png"
            />
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
        productImageName="/45jpg@2x.png"
        productDescription="Rockstar Jacket"
        productPrice="$22.00"
        propLeft="326px"
        propTop="1123.22px"
      />
      <ProductCard
        productImageName="/44-df90161a71724fac869ac6af02c86d12jpg@2x.png"
        productDescription="Dotted Black Dress"
        productPrice="$20.00"
        propLeft="652px"
        propTop="1123.22px"
      />
    </div>
  );
};

export default RecommendedProductsContainer;
