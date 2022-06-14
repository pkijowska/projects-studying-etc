import './Card.css';
import React, { useState } from 'react';

function Card(props) {
  const [calendar, setCalendar] = useState({id: 15, open: 'hidden', calendarEvent: "Go to pilates classes"});

  // const d = new Date(`${props.nameOfMonth} ${props.num+1}, ${props.year} 01:15:00`);
  // let day = d.getDay();
  // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // console.log(props, props.today, props.num+1, props.today == props.num+1)
  // console.log(props.num === undefined ? props.prevMonthCount)
  const renderCurrentMonthCount = props.todayNr === props.num+1 ? <span className="card-today">{props.num+1}</span> : props.num+1;
  const checkForPreviousMonth = props.prevMonthCount ? props.prevMonthCount - props.num+1+props.iteration : renderCurrentMonthCount;
  const handleClick = (e) => {
    console.log(props.num+1,'hey')
    setCalendar({...calendar, open: 'open'})
  }

  const todoSnippet = <div className={`todo ${calendar.open}`}> Todo: </div>

  return(
    <div onClick={handleClick} className="card">
    { checkForPreviousMonth }
    {todoSnippet}
    </div>
  )
}

export default Card;
