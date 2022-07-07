import '../Card.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { storeCurrentDay } from '../actions/day';

function Card(props) {
  const [isActive, setIsActive] = useState(null);

  const { id, calendarEvent } = props.card;

  //can we add this to the reducer?
  const handleClick = () => {
    // props.clickedCard(id)
    props.dispatch(storeCurrentDay(id))
    console.log(props, 'propsyk')

  }

  const displayNumber = props.todayNr === id ? <p className="card-today">{id}</p> : <p className="card-number">{id}</p>;

  return(
    //do we need this below next to className?
    <div tabindex="0" onClick={handleClick} className={isActive ? "card card--current" : "card"}>
      <div className="card__details">
        <p className="center">{displayNumber}</p>
      <p className="card__details-number"> {calendarEvent.length ? '.'.repeat(calendarEvent.length) : "" }</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, month) => {
  return {
    currentDay: state.day
  };
};

export default connect(mapStateToProps)(Card);
