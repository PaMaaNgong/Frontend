import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
// import Navbar from './components/Navbar';


const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]); 

  return (
    <div className="App">
      {/*<Navbar />*/}
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
};

export default App;
