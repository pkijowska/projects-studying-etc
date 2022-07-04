import '../Card.scss';
import React, { useState } from 'react';

function Card(props) {
  const [isActive, setIsActive] = useState(null);

  const { id, calendarEvent } = props.card;

  const handleClick = () => {
    props.clickedCard(id)
  }

  const displayNumber = props.todayNr === id ? <p className="card-today">{id}</p> : <p className="card-number">{id}</p>;

  return(
    <div tabindex="0" onClick={handleClick} className={isActive ? "card card--current" : "card"}>
      <div className="card__details">
        <p className="center">{displayNumber}</p>
      <p className="card__details-number"> {calendarEvent.length ? '.'.repeat(calendarEvent.length) : "" }</p>
      </div>
    </div>
  )
}

export default Card;
