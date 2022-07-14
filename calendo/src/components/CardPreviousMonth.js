import '../Card.scss';
import React, { useState } from 'react';

function CardPreviousMonth(props) {
  const { prevMonthCount, cardNumber } = props;
  return(
    <div className="card card--cross">
      <div className="card__details">
        <p className="center card__secondary">{prevMonthCount-cardNumber}</p>
        <span className="card__details-number"></span>
      </div>
    </div>
  )
}

export default CardPreviousMonth;
