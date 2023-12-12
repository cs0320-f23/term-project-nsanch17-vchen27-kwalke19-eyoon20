import React from 'react';
import "../../style/NavBar.css";

interface SearchHistoryProps {
    searchHistory: string[];
    onHistoryClick: (entry: string) => void;
  }

const SearchHistory: React.FC<SearchHistoryProps> = ({ searchHistory, onHistoryClick }) => {
    return (
    <ul className="search-history">
      {searchHistory.map((entry, index) => (
        <li key={index} onClick={() => onHistoryClick(entry)}>
          {entry}
        </li>
      ))}
    </ul>
  );
};

export default SearchHistory;