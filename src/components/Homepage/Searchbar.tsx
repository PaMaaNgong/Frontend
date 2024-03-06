import React, { useState } from 'react';
import searchIcon from "../Homepage/icon/image 6.png"

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value);
  };
  

  return (
    <div className="relative w-1/2 mx-auto">
      <img src={searchIcon} alt="Search Icon" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-auto h-9" />
      <input
        className="pl-14 pr-3 w-full py-1 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 text-left"
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;