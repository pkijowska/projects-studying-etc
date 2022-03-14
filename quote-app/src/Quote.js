import React, { useState, useCallback, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quote = () => {
  const [quote, setText] = useState({text: 'Spread love everywhere you go.', author: 'Mother Teresa', load: false})

  const changeColor = () => {
    const bodyElt = document.querySelector("body");
    const button = document.querySelector("button");
    const bgcolor = "hsla(" + ~~(360 * Math.random())+","+"70%,"+"80%,1)"
    if (button) {
      button.style.backgroundColor = bgcolor
    }
    bodyElt.style.backgroundColor = bgcolor;
  }

  useEffect(() => {
    changeColor()
    sendRequest()
  },[])

//I dont need usecallback actually
  const sendRequest = useCallback(async () => {
    try {
      const api = await fetch('https://type.fit/api/quotes');
      const jsn = await api.json();
      const length = jsn.length;
      const randomQuote = Math.floor((Math.random(length)*100)+1);
      const final = jsn[randomQuote].text;
      const author = jsn[randomQuote].author;
      changeColor()
      return setText({text: final, author: author, load: true})
    } catch {
      setText({load: false})
    }
  }, [])

  return (
    <div className="quote-wrapper d-flex justify-content-center align-items-center">
      {quote.load ?
      <Card gap={2} className="col-md-6 mx-auto">
        <Card.Header>Quote</Card.Header>
        <Card.Body>
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
          <Button variant="light" id="btn new-quote" className="mt-2" onClick={sendRequest}>New quote</Button>
        </Card.Body>
      </Card> : ''}
    </div>
  )
}

export default Quote;
