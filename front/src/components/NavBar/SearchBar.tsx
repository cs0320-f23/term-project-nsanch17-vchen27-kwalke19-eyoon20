import React from "react";
import "../../style/NavBar.css";
import Search from "../../assets/search-normal.png";

interface SearchbarProps {
  onSearchSubmit: () => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchbarProps> = ({
  onSearchSubmit,
  searchTerm,
  setSearchTerm,
}) => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
      onSearchSubmit(); // Call the search submit function
    }
  };

  return (
    <div className="searchbar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Ivy Exchange" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Add the key down event handler
      />
      <img
        className="search-image"
        src={Search}
        alt="Search Icon"
        onClick={onSearchSubmit}
      />
    </div>
  );
};

export default SearchBar;
