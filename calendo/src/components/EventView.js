import '../App.css';
import React, { useState } from 'react';


function EventView(props) {

  const {day, month, year} = props;
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
      <h5>Clicked date: {day} {month} {year}</h5>
      <h5>  Events:  </h5>
      <button onClick={showForm} className="event-card__button">  Add an event </button>
      { day && addIsClicked && editTodo}
    </div>
  )
}

export default EventView;
