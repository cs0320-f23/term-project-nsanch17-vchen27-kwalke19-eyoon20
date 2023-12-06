import React from 'react';

const ProductDetails = () => {
  // Product details would ideally come from props or a state management store
  const title = "Urbano Jacket – Price is negotiable!";
  const price = "$99";
  const description = (
    <>
      <p>Embrace the epitome of contemporary elegance with the Urbano Jacket – a garment that redefines modern sophistication. Crafted from premium, sustainably sourced fabrics, this jacket is not only a testament to timeless style but also an embodiment of eco-conscious fashion.</p>
      <p>The Urbano Jacket features a sleek, tailored cut that provides a flattering fit for all body types. Its sharp lapels draw attention to the collarbone, while the meticulously structured shoulders create a silhouette that exudes confidence. The single-button closure at the front is a nod to classic design, yet the overall aesthetic remains distinctly modern.</p>
      <p>Inside, the jacket is lined with a luxuriously soft silk blend that ensures comfort throughout the day. The interior pockets are hand-stitched, offering a subtle hint of the craftsmanship that went into each detail of this piece. The jacket's versatile design makes it suitable for both formal and casual occasions – pair it with dress trousers for a business meeting, or with denim for an effortlessly chic weekend look.</p>
      <p>Beyond its appearance, the Urbano Jacket is a garment with a story. Each purchase supports local artisans and promotes fair labor practices. This jacket isn't just an addition to your wardrobe; it's a step towards a more ethical and sustainable fashion future.</p>
    </>
  );

  return (
    <div className="product-details">
      <h1 className="product-title">{title}</h1>
      <p className="product-price">{price}</p>
      <div className="product-description">
        {description}
      </div>
    </div>
  );
};

export default ProductDetails;
