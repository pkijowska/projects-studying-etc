import '../App.css';
import React, { useState } from 'react';


function EventView({day, month, year}) {



  const handleSubmit = () => {

  }

  const handleTodo = () => {

  }

  const editTodo =
  <form  onSubmit={handleSubmit}>
   {<div className={`todo `}>
      <textarea
            value="example"
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


      <button className="event-card__button">  Add an event </button>

      {editTodo}
    </div>
  )
}

export default EventView;
