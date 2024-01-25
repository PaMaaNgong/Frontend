import React, { useState } from 'react';

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
      <div className="input-wrapper">
        <input
          className="w-full px-4 py-1 border-30 rounded-full focus:outline-none focus:ring-2 focus:ring-black-500 placeholder-gray-500"
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