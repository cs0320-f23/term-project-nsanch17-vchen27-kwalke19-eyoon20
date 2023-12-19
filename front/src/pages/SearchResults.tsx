import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../style/SearchResults.css";
import { Posting } from "../types";
import { useNavigate, useParams } from "react-router-dom";




const SearchResults: React.FC = () => {

  const [search, setSearch] = useState<Posting[]>([])
  const navigate = useNavigate();
  const { searchTerm } = useParams();


  useEffect(() => {
    const getSearchResults = async () => {
      try {
       
        const response = await fetch(
          `http://127.0.0.1:8000/search/search?type=posting&query=${searchTerm}`
        ); 

        if (response.ok) {
          const data = await response.json();
          console.log(data.search_results)


           const newSearchResults = data.search_results.map(
             (result:Posting) => result
           );

          
           setSearch((prevResults) => [
             ...prevResults,
             ...newSearchResults,
           ]);

          setSearch(data.search_results);
       
        } else {
          console.error("Failed to fetch search results.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSearchResults();
  }, [searchTerm]);

  return (
    <div>
        <h1>Showing results for: {searchTerm} </h1>
      <div className="products">
        {search.map((postingData, index) => (
          <ProductCard
            key={index}
            posting={postingData}
            onClick={() => {
              navigate(`/single-item/${index}`, {
                state: { posting: postingData },
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;


