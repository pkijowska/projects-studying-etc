import '../App.css';
import React, { useState } from 'react';


function EventView(props) {
  const {day, month, year, calendar} = props;
  const [addIsClicked, add] = useState(false)
  const [newEvent, addEvent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEvent(newEvent)
    add(false)
  }

  const handleTodo = (event) => {
    addEvent(event.target.value)
  }

  const showForm = () => {
    add(true)
  }

  const editTodo =
  <form  onSubmit={handleSubmit}>
   {<div className={`todo `}>
      <textarea
            value={newEvent}
            onChange={handleTodo}
            rows={5}
            cols={9}
          />
      <button className="todo__submit-button" type="submit">Add</button>
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
            return element.calendarEvent.map((el)=> (<li>{el}</li>))
          }
        })}
      </ul>
      <button onClick={showForm} className="event-card__button">  Add an event </button>

      { day && addIsClicked && editTodo}
    </div>
  )
}

export default EventView;
