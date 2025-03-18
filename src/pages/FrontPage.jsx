import React, { useState, useEffect } from "react";
import "./frontPage.css"
import quotes from "../assets/quotes.js"

const FrontPage = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
     
        <div className="quote-container">
          <h2 className="headline">Random Quote Generator</h2>
        </div>
        
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>

        <button
          onClick={getQuote}
          className="getButton">
          <span className="recycle">🔄</span>
          Get New Quote
        </button>
      
    </div>
  );
};

export default FrontPage;