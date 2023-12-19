import React, { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchHistory from './SearchHistory';
import { useNavigate } from "react-router-dom";


interface SearchProps {
  onSearch: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();


  useEffect(() => {
    
    // hide SearchHistory if user clicks outside of Search
    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowHistory(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);

  }, [searchRef]);

  // show SearchHistory if SearchBar is clicked again
  const handleSearchBarClick = () => {
    setShowHistory(true);
  };

  // show the five most recent searches
  const handleSearchSubmit = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchHistory([searchTerm, ...searchHistory.slice(0, 4)]);
      setSearchTerm('');
      navigate(`/search-results/${searchTerm}`);
    }
  };

  const handleHistoryClick = (term: string) => {
    setSearchTerm(term);
    onSearch(term); 
  };

  // only show SearchHistory if showHistory is true
  return (
    <div className="search-wrapper"ref={searchRef} onClick={handleSearchBarClick}>
      <SearchBar
        onSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {showHistory && (
        <SearchHistory
          searchHistory={searchHistory}
          onHistoryClick={handleHistoryClick}
        />
      )}
    </div>
  );
};

export default Search;
