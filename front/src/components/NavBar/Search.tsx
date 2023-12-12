import React, { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchHistory from './SearchHistory';

interface SearchProps {
  onSearch: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Event listener to detect all clicks on the document
    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowHistory(false); // Hide history if clicked outside of search bar
      }
    };

    // Attach the listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the listener on component unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchRef]);

  const handleSearchBarClick = () => {
    setShowHistory(true); // Show history when search bar is clicked
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchHistory([searchTerm, ...searchHistory.slice(0, 4)]);
      setSearchTerm('');
    }
  };

  const handleHistoryClick = (term: string) => {
    setSearchTerm(term);
    onSearch(term); 
  };

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
