import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../style/Home/RecommendedProducts.css";
import { useNavigate } from "react-router-dom";
import mockRecommendations from "../mocks/mockRecommendations.ts";

const RecommendedProductsContainer: React.FC<{ selectedPriceRange: string | null }> = ({ selectedPriceRange }) => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Filter logic based on price range
    const filteredRecommendations = mockRecommendations.filter(posting => {
      if (selectedPriceRange === '$0-$25') {
        return posting.price <= 25;
      } else if (selectedPriceRange === '$25-$50') {
        return posting.price > 25 && posting.price <= 50;
      } else if (selectedPriceRange === '$50+') {
        return posting.price > 50;
      }
      return true; // No filter selected
    });

    setRecommendations(filteredRecommendations);
  }, [selectedPriceRange]);
    
    /* Commenting out the backend call
    const fetchRecommendations = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch('http://localhost:8000/recommendations/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user: currentUsername })
        });
        if (response.ok) {
          const data = await response.json();
          setRecommendations(data.recommendations);
        } else {
          setError("Failed to load recommendations.");
        }
      } catch (error) {
        setError("Network error.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
    */


  return (
    <div className="products">
      {recommendations.map((postingData, index) => (
        <ProductCard
          key={index}
          posting={postingData}
          onClick={() => navigate(`/single-item/${index}`, { state: { posting: postingData } })}
        />
      ))}
    </div>
  );
};

export default RecommendedProductsContainer;
