import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../style/Home/RecommendedProducts.css";
import { useNavigate } from "react-router-dom";
import mockRecommendations from "../mocks/mockRecommendations.ts";

const RecommendedProductsContainer: React.FC = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);

  // Replace this with the actual way of getting the logged-in user's username
  const currentUsername = localStorage.getItem('currentUsername');

  useEffect(() => {
    // Simulate fetching data
    setRecommendations(mockRecommendations);
    
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
  }, [currentUsername]); // Dependency array includes currentUsername

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
