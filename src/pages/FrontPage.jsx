import React, { useState } from 'react'

export default function FrontPage() {
  return (
    <div className="quote-container">
      <h2>Random Quote Generator</h2>
      <p className="quote-text">"{quote}"</p>
      <h4 className="quote-author">- {author}</h4>
      <button className="quote-button" onClick={getQuote}>Get New Quote</button>
    </div>
  )
}
