import React, { useState } from "react";
import "../style/Home/FilterContainer.css";

const FilterContainer: React.FC = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );

  const handlePriceRangeClick = (range: string) => {
    setSelectedPriceRange((prevRange) => (prevRange === range ? null : range));
  };

  const handleCollectionClick = (collection: string) => {
    setSelectedCollection((prevCollection) =>
      prevCollection === collection ? null : collection
    );
  };

  return (
    <div className="filter">
      <div className="filter-menu-05">
        <div className="collections">Collections</div>
        <div className="pseudo">
          <div className="arrow-downsvg">
            <img className="vector-icon1" alt="" src="/vector.svg" />
          </div>
        </div>
        <div
          className={`item-link ${
            selectedCollection === "All products" ? "selected" : ""
          }`}
          onClick={() => handleCollectionClick("All products")}
        >
          All products
        </div>
        <div
          className={`item-link1 ${
            selectedCollection === "Tickets" ? "selected" : ""
          }`}
          onClick={() => handleCollectionClick("Tickets")}
        >
          Tickets
        </div>
        <div
          className={`item-link2 ${
            selectedCollection === "Clothing" ? "selected" : ""
          }`}
          onClick={() => handleCollectionClick("Clothing")}
        >
          Clothing
        </div>
      </div>
      <div className="filters-menu06">
        <div className="heading-4">Tags</div>
        <div className="list">{/* ... (remaining code unchanged) ... */}</div>
      </div>
      <div className="filters">Filters</div>
      <div className="filters-menu03">
        <div className="heading-41">Prices</div>
        <div
          className={`price-range-1 ${
            selectedPriceRange === "$0-$25" ? "selected" : ""
          }`}
          onClick={() => handlePriceRangeClick("$0-$25")}
        >
          $0-$25
        </div>
        <div
          className={`price-range-2 ${
            selectedPriceRange === "$25-$50" ? "selected" : ""
          }`}
          onClick={() => handlePriceRangeClick("$25-$50")}
        >
          $25-$50
        </div>
        <div
          className={`price-range-3 ${
            selectedPriceRange === "$50+" ? "selected" : ""
          }`}
          onClick={() => handlePriceRangeClick("$50+")}
        >
          $50+
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
