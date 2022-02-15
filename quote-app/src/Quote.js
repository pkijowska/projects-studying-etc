import React, { useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quote = () => {
  const [quote, setText] = useState({text: 'Keep on dreaming', author: 'unknow'})
  const [color, setColor] = useState('')

  const changeColor = () => {
    const bodyElt = document.querySelector("body");
    const bgcolor = "hsla(" + ~~(360 * Math.random())+","+"70%,"+"80%,1)"
    bodyElt.style.backgroundColor = bgcolor
  }

  const sendRequest = useCallback(async () => {
      const api = await fetch('https://type.fit/api/quotes');
      const jsn = await api.json();
      const length = jsn.length;
      const randomQuote = Math.floor((Math.random(length)*100)+1);
      const final = jsn[randomQuote].text;
      const author = jsn[randomQuote].author;
      changeColor()
      return setText({text: final, author: author})
    }, [])

  return (
    <div className="quote-wrapper d-flex justify-content-center align-items-center">
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
          <Button variant="info" className="mt-2" onClick={sendRequest}>New quote</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Quote;
