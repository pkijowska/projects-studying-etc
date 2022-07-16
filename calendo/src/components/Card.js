import React, { useState } from 'react';
import { connect } from 'react-redux';
import { storeCurrentDay } from '../actions/day';

function Card(props) {
  const { id, calendarEvent } = props.card;
  const handleClick = () => {
    props.dispatch(storeCurrentDay(id))
  }

  const displayNumber = props.todayNr === id ? <p className="card-today">{id}</p> : <p className="card-number">{id}</p>;

  return(
    <div tabindex="0" onClick={handleClick} className="card">
      <div className="card__details">
        <p className="center">{displayNumber}</p>
      <p className="card__details-number"> {calendarEvent.length ? '.'.repeat(calendarEvent.length) : "" }</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, month) => {
  return {
    currentDay: state.currentDay
  };
};

export default connect(mapStateToProps)(Card);
