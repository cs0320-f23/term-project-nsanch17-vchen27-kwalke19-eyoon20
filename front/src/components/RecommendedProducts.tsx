import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../style/Home/RecommendedProducts.css";
import { useNavigate } from "react-router-dom";

const RecommendedProductsContainer: React.FC = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch('http://localhost:8000/recommendations/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user: 'current_user_id' }) // Replace with the current user's ID
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
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products">
      {Object.entries(recommendations).map(([postingId, postingData]) => (
        <ProductCard
          key={postingId}
          posting={postingData}
          onClick={() => navigate(`/single-item/${postingId}`)}
        />
      ))}
    </div>
  );
};

export default RecommendedProductsContainer;
