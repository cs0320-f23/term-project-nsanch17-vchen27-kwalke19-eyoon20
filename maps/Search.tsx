import React, { useState } from "react";
import Searchbar from "./SearchBar";
import SearchHistory from "./SearchHistory";

interface SearchProps {
  onSearch: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearchSubmit = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchHistory([searchTerm, ...searchHistory.slice(0, 4)]);
      setSearchTerm("");
    }
  };

  const handleHistoryClick = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      handleSearchSubmit();
      setSearchTerm("");
    }
  };

  return (
    <div onKeyDown={keyDownHandler}>
      <Searchbar
        onSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        aria-label={"search bar"}
      />
      <SearchHistory
        searchHistory={searchHistory}
        onHistoryClick={handleHistoryClick}
        aria-label={"search history"}
      />
    </div>
  );
};

export default Search;
