import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../style/Home/RecommendedProducts.css";
import { useNavigate } from "react-router-dom";
import mockRecommendations from "../mocks/mockRecommendations.ts";
import { useUser } from "./UserProfile/UserContext.tsx";

const RecommendedProductsContainer: React.FC<{
  selectedPriceRange: string | null;
}> = ({ selectedPriceRange }) => {
  const navigate = useNavigate();

  const [recommendations, setRecommendations] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/recommendations/generate?user=${user?.username}`
        );

        console.log(selectedPriceRange);

        if (response.ok) {
          const data = await response.json();

          const filteredRecommendations = data.recommendations.filter(
            (posting: { price: number }) => {
              if (!selectedPriceRange) {
                return true;
              }

              if (selectedPriceRange === "$0-$25") {
                console.log(true);
                return posting.price <= 25;
              } else if (selectedPriceRange === "$25-$50") {
                return posting.price > 25 && posting.price <= 50;
              } else if (selectedPriceRange === "$50+") {
                return posting.price > 50;
              }

              return true;
            }
          );

          setRecommendations(filteredRecommendations);
        } else {
          console.log(response);
          console.error("Failed to load recommendations.");
        }
      } catch (error) {
        console.error("Network error.", error);
      }
    };
    if (user) {
      fetchRecommendations();
    }
  }, [user]);

  return (
    <div className="products">
      {recommendations.map((postingData, index) => (
        <ProductCard
          key={index}
          posting={postingData}
          onClick={() =>
            navigate(`/single-item/${index}`, {
              state: { posting: postingData },
            })
          }
        />
      ))}
    </div>
  );
};

export default RecommendedProductsContainer;
