import '../App.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addEvent, removeEvent } from '../actions/events';

function SideBar(props) {
  const {day, month, year, todayNr} = props;
  const [addIsClicked, add] = useState(false)
  const [newText, addText] = useState('')
  const [clicked, isClicked] = useState(false)
  const showDay = day ? day : todayNr;
  console.log(props.clicked)

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addEvent({id: showDay, calendarEvent: [newText]}))
    addText('')
    add(false)
  }

  const handleTodo = (event) => {
    addText(event.target.value)
  }

  const showForm = () => {
    add(true)
  }

  // useEffect(()=> {
  //   isClicked(props.clicked)
  // }, [clicked])

  const addNewEventForm =
  <form  onSubmit={handleSubmit}>
   {<div className={`todo `}>
      <input
        placeholder="Type a new event"
            value={newText}
            onChange={handleTodo}
          />
      <button onClick={showForm} className="event-card__button"> <span> ➕ </span></button>
    </div>
    }
  </form>;

  return (
    <div className="event-card">
      <h3 className="event-card__heading">TO DO LIST</h3>
      <h3 className={`event-card__date event-card__date-shake ${clicked}`}> {showDay} {month} {year} </h3>
      <ul>
        {props.events.map((element) => {
          if (element.id === showDay) {
            return element.calendarEvent.map((el,i)=> {
              return <li onClick={(e)=>{props.dispatch(removeEvent(i, day))}}>{el} <button>❌</button> </li>
            })
          }
        })}
      </ul>
      { addNewEventForm }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};


export default connect(mapStateToProps)(SideBar);
