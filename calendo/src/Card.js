import './Card.css';
import React, { useState } from 'react';

function Card(props) {
  //I dont; need this
  const [calendar, setCalendar] = useState([{id: 15, isSubmitted: true,open: 'hidden', calendarEvent: "Go to pilates classes"}]);
  const currentlyClickedCard = props && props.calendar && props.calendar.find(element => element.id === props.num+1);
  // const addClass = currentlyClickedCard && currentlyClickedCard.open ? 'open' : 'hidden';
  const displayTodayCard = props.todayNr === props.num+1 ? <span className="card-today">{props.num+1}</span> : props.num+1;
  const checkForPreviousMonth = props.prevMonthCount ? props.prevMonthCount - props.num+1+props.iteration : displayTodayCard;

  const handleClick = (e) => {
    // props.setTodos({id: props.num+1, open: 'open'})
    // console.log(props.calendar, 'cal')
  }

  const displayCalendar = () => {
    const result = props && props.calendar && props.calendar.find(element => element.id === props.num+1)
    return result && result.isSubmitted ? result.calendarEvent : ''
  }

  const handleTodo = (event) => {
    props.setTodos({id: props.num+1, open: 'open', isSubmitted: false, calendarEvent: event.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = props && props.calendar && props.calendar.find(element => element.id === props.num+1)
    // result.isSubmitted = true;
    //can I do this?
    props.setTodos({id: props.num+1, open: 'open', isSubmitted: true, calendarEvent: result.calendarEvent});
  }


  const editTodo =
  <form  onSubmit={(e) => handleSubmit(e)}>
   <div className={`todo`}>  <textarea
            value={calendar.calendarEvent}
            onChange={handleTodo}
            rows={5}
            cols={5}
          />
    </div>
    <button type="submit">Add</button>
  </form>;

  return(
    <div onClick={handleClick} className="card">
      { checkForPreviousMonth }
      {editTodo}
      <h6>
      {displayCalendar()}
      </h6>
    </div>
  )
}

export default Card;
