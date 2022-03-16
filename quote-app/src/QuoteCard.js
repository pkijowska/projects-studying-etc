import React from 'react';

const QuoteCard = ({quote}) => {
  return (
    <div>
      <blockquote className="blockquote mb-0">
        <div className="quote-wrapper__stack">
          <h1>„</h1>
          <p>{quote.text}</p>
          <h1>“</h1>
        </div>
        <footer className="blockquote-footer">
           <cite title="Source Title">{quote.author}</cite>
        </footer>
      </blockquote>
  </div>
  )
}

export default QuoteCard;
