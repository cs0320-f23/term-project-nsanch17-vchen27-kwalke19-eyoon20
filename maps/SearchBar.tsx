import React from "react";
import "./App.css";

interface SearchbarProps {
  onSearchSubmit: () => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  onSearchSubmit,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="searchbar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Map"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={onSearchSubmit}></button>
    </div>
  );
};

export default Searchbar;
