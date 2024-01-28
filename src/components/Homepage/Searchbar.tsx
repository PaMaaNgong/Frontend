import React, { useState } from 'react';
import searchicon from "./icon/image 6.png";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value); // Call the passed onSearch function with the current input value
  };
  

  return (
    <div>
      <div className="w-1/2 mx-auto input-wrapper ">
      {/* <img src={searchicon} alt="Profile Icon" className="w-15 h-8" /> */}
        <input
          className="w-full px-4 py-1 border-30 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;