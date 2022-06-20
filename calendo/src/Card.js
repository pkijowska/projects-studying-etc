import './Card.css';
import React, { useState } from 'react';

function Card(props) {
  const [toDo, setEvent] = useState([{}]);

  const { id, calendarEvent, isSubmitted, open } = props.card;

  const handleTodo = (event) => {
    setEvent({id: id, open: 'open', isSubmitted: false, calendarEvent: event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value, 'toDo')
    props.setTodos(toDo);
    // const result = props && props.calendar && props.calendar.find(element => element.id === props.num+1)
    // // result.isSubmitted = true;
    // //can I do this?
    // props.setTodos({id: id, open: 'open', isSubmitted: true, calendarEvent: calendarEvent});
  }

  const handleClick = () => {
    console.log(id, 'handleClick')
    props.setTodos({id: id, open: 'open', isSubmitted: true, calendarEvent: calendarEvent});
  }

  const editTodo =
  <form  onSubmit={handleSubmit}>
   {isSubmitted && <div className={`todo ${open}`}>
      <textarea
            value={toDo.calendarEvent}
            onChange={handleTodo}
            rows={5}
            cols={9}
          />
      <button type="submit">Add</button>
    </div>
  }
  </form>;

  return(
    <div onClick={handleClick} className="card">
      {id}
      {calendarEvent}
      {editTodo}
    </div>
  )
}

export default Card;
