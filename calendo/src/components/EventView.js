import '../App.css';
import React, { useState } from 'react';


function EventView(props) {
  const {day, month, year, calendar} = props;
  const [addIsClicked, add] = useState(false)
  const [newEvent, addEvent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEvent(newEvent)
    addEvent('')
    add(false)
  }

  const handleTodo = (event) => {
    addEvent(event.target.value)
  }

  const showForm = () => {
    add(true)
  }

  function removeEvent(i) {
    props.removeEvent({day, i})
  }

  const editTodo =
  <form  onSubmit={handleSubmit}>
   {<div className={`todo `}>
      <input
        placeholder="Type a new event"
            value={newEvent}
            onChange={handleTodo}
          />
      <button onClick={showForm} className="event-card__button"> <span> ➕ </span></button>
    </div>
    }
  </form>;

  return (
    <div className="event-card">
      <h3 className="event-card__heading">TO DO LIST</h3>
      <h3 className="event-card__date"> {day} {month} {year} </h3>
      <ul>
        {calendar.map((element) => {
          if (element.id === day) {
            return element.calendarEvent.map((el,i)=> {
              return <li onClick={(e) => removeEvent(i)}>{el} ❌ </li>
            })
          }
        })}
      </ul>

      {  editTodo}
    </div>
  )
}

export default EventView;
