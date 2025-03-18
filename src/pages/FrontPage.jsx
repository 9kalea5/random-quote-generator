import React, { useState, useEffect } from "react";
import "./frontPage.css"

const FrontPage = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
  
      // Get a random quote from the list
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].text);
      setAuthor(data[randomIndex].author || "Unknown");
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Life is what happens while you're busy making other plans.");
      setAuthor("John Lennon");
    }
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