import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Search from './components/Search'
=======
// import Navbar from './components/Navbar';
>>>>>>> eeb0879a8e8c4dc8c531ae99e0badfe8e2a29db7


const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]); 

  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Search />
      {/* <div className="search-bar-container">
=======
      {/*<Navbar />*/}
      <div className="search-bar-container">
>>>>>>> eeb0879a8e8c4dc8c531ae99e0badfe8e2a29db7
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div> */}
    </div>
  );
};

export default App;
