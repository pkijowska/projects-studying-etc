import '../App.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addEvent, removeEvent } from '../actions/events';

function SideBar(props) {
  const {currentDay, month, year, todayNr} = props;
  const [newText, addText] = useState('')
  const showDay = currentDay ? currentDay : todayNr;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addEvent({id: showDay, calendarEvent: [newText], month:month}))
    addText('')
  }

  const handleTodo = (event) => {
    addText(event.target.value)
  }

  const addNewEventForm =
  <form  onSubmit={handleSubmit}>
   {<div className="todo">
      <input
        placeholder="Type a new event"
            value={newText}
            onChange={handleTodo}
          />
      <button className="event-card__button"> <span> ➕ </span></button>
    </div>
    }
  </form>;

  return (
    <div className="event-card">
      <h3 className="event-card__heading">TO DO LIST</h3>
      <h3 className="event-card__date event-card__date-shake"> {showDay} {month} {year} </h3>
      <ul>
        {props.events.map((element) => {
          if (element.id === showDay) {
            return element.calendarEvent.map((el,i)=> {
              return <li onClick={(e)=>{props.dispatch(removeEvent({id: i, currentDay, month}))}}>{el} <button>❌</button> </li>
            })
          }
        })}
      </ul>
      { addNewEventForm }
    </div>
  )
}

const mapStateToProps = (state, month) => {
  return {
    events: state.events,
    currentDay: state.currentDay
  };
};


export default connect(mapStateToProps)(SideBar);
