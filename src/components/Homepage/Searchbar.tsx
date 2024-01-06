import React, { useState } from 'react';

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: { name: string }) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar-container rounded-full ">
      <div className="input-wrapper rounded-full">
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          // Adjusted width using "w-64"
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="results-list">
        {/* Render SearchResultsList here */}
      </div>
    </div>
  );
};

export default SearchBar;
