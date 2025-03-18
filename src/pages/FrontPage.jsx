import React, { useState } from 'react'

export default function FrontPage() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  return (
    <div className="quote-container">
      <h2>Random Quote Generator</h2>
      <p className="quote-text">"{quote}"</p>
      <h4 className="quote-author">- {author}</h4>
      <button className="quote-button" onClick={getQuote}>Get New Quote</button>
    </div>
  )
}
