import '../Card.scss';
import React, { useState } from 'react';

function Card(props) {

  const { id, calendarEvent } = props.card;

  const handleClick = () => {
    props.clickedCard(id)
  }

  const displayNumber = props.todayNr === id ? <p className="card-today">{id}</p> : <p className="card-number">{id}</p>;

  return(
    <div onClick={handleClick} className="card">
      <div className="card__details">
        <p className="center">{displayNumber}</p>
        <ul>
          {calendarEvent.length ? <p>💡{calendarEvent.length} event </p> : "" }
        </ul>

      </div>
    </div>
  )
}

export default Card;
