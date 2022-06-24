import '../Card.scss';
import React, { useState } from 'react';

function Card(props) {
  // const [toDo, setEvent] = useState([{}]);

  const { id, calendarEvent, isSubmitted, open } = props.card;

  // const handleTodo = (event) => {
  //   setEvent({id: id, open: 'open', isSubmitted: false, calendarEvent: event.target.value})
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.setTodos(toDo);
  //
  // }

  const handleClick = () => {
    // props.setTodos({id: id, open: 'open', isSubmitted: true, calendarEvent: calendarEvent});
    props.clickedCard(id)
  }

  const displayNumber = props.todayNr === id ? <p className="card-today">{id}</p> : <p className="card-number">{id}</p>;

  // const editTodo =
  // <form  onSubmit={handleSubmit}>
  //  {isSubmitted && <div className={`todo ${open}`}>
  //     <textarea
  //           value={toDo.calendarEvent}
  //           onChange={handleTodo}
  //           rows={5}
  //           cols={9}
  //         />
  //     <button className="todo__submit-button" type="submit">Add</button>
  //   </div>
  // }
  // </form>;

  return(
    <div onClick={handleClick} className="card">
      <div className="card__details">
        <p className="center">{displayNumber}</p>
        <ul>
          {calendarEvent.length ? <li>{calendarEvent.length} event </li> : "" }
        </ul>

      </div>
    </div>
  )
}

export default Card;
