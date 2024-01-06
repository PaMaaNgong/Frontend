import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Homepage/Navbar';
import SearchBar from './components/Homepage/Searchbar';



const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]); 

  return (
    <div className="App">
      <Navbar/>
      <SearchBar />
    </div>
  );
};

export default App;
