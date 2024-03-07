import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Homepage/Navbar";
import Cardcourse from "./components/Homepage/ArticleBoard";
import { useEffect } from "react";


const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessTokenFromURL = urlParams.get("accessToken");
    console.log(accessTokenFromURL)
    if (accessTokenFromURL) {
      if(localStorage.getItem("accessToken") === null)
        localStorage.setItem("accessToken",accessTokenFromURL)
    }
    else{
      window.location.replace('https://whale-app-3xvcg.ondigitalocean.app/v1/auth');
    }
    
  }, []);


  return (
    <div className="App font-kanit">
      <Cardcourse />
    </div>
  );
};

export default App;
