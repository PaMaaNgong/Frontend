import React from 'react';
import "./SearchResult.css";

interface SearchResultProps {
  result: string; // กำหนดชนิดของ result เป็น string
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

export default SearchResult;
