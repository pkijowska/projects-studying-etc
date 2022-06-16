import './Card.css';
import React, { useState } from 'react';

function Card(props) {
  const [calendar, setCalendar] = useState([{id: 15, open: 'hidden', calendarEvent: "Go to pilates classes"}]);

  const renderCurrentMonthCount = props.todayNr === props.num+1 ? <span className="card-today">{props.num+1}</span> : props.num+1;
  const checkForPreviousMonth = props.prevMonthCount ? props.prevMonthCount - props.num+1+props.iteration : renderCurrentMonthCount;

  const handleClick = (e) => {

  }

  const displayCalendar = () => {
    // console.log(props && props.calendar, 'p')
    // if (props && props.calendar) {
    //     return props.calendar.forEach((el)=> {
    //     if (el.id === props.num+1) {
    //       console.log(el, 'elm', props.num+1)
    //       return el.calendarEvent
    //     }
    //   })
    // } else {
    //   return 'jkkk'
    // }
    const result =props && props.calendar && props.calendar.find(element => element.id === props.num+1)
    return result ? result.calendarEvent : ''
  }

  const handleTodo = (event) => {
    props.setTodos({id: props.num+1, open: 'open', calendarEvent: event.target.value});
  }

  const todoSnippet = <div className={`todo ${calendar.open}`}>  <textarea
          value={calendar.calendarEvent}
          onChange={handleTodo}
          rows={5}
          cols={5}
        /> </div>

  return(
    <div onClick={handleClick} className="card">
    { checkForPreviousMonth }
    {todoSnippet}
    <h6>
    {displayCalendar()}
    </h6>
    </div>
  )
}

export default Card;
