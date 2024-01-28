import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Homepage/Navbar';
import Cardcourse from './components/Homepage/ArticleBoard' ;





const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);

  
  return (
    <div className="App font-kanit">
      <Cardcourse />
    </div>
  );
};

export default App;
