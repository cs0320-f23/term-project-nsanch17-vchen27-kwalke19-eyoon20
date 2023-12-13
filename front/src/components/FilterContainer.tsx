import React, { useState } from "react";
import "../style/Home/FilterContainer.css";

const FilterContainer: React.FC = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const handlePriceRangeClick = (range: string) => {
    setSelectedPriceRange(prevRange => prevRange === range ? null : range);
  };

  const handleCollectionClick = (collection: string) => {
    setSelectedCollection(prevCollection => prevCollection === collection ? null : collection);
  };

  return (
    <div className="filter">
      <div className="filter-section collections">
        <div className="filter-section-header">Collections</div>
        <div 
          className={`filter-item ${selectedCollection === 'All products' ? 'selected' : ''}`} 
          onClick={() => handleCollectionClick('All products')}
        >
          All products
        </div>
        <div 
          className={`filter-item ${selectedCollection === 'Tickets' ? 'selected' : ''}`} 
          onClick={() => handleCollectionClick('Tickets')}
        >
          Tickets
        </div>
        <div 
          className={`filter-item ${selectedCollection === 'Clothing' ? 'selected' : ''}`} 
          onClick={() => handleCollectionClick('Clothing')}
        >
          Clothing
        </div>
      </div>
      <div className="filter-section prices">
        <div className="filter-section-header">Prices</div>
        <div 
          className={`filter-item ${selectedPriceRange === '$0-$25' ? 'selected' : ''}`} 
          onClick={() => handlePriceRangeClick('$0-$25')}
        >
          $0-$25
        </div>
        <div 
          className={`filter-item ${selectedPriceRange === '$25-$50' ? 'selected' : ''}`} 
          onClick={() => handlePriceRangeClick('$25-$50')}
        >
          $25-$50
        </div>
        <div 
          className={`filter-item ${selectedPriceRange === '$50+' ? 'selected' : ''}`} 
          onClick={() => handlePriceRangeClick('$50+')}
        >
          $50+
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
