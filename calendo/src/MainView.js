import './App.css';
import Card from './Card.js';
import DaysOfTheWeek from './DaysOfTheWeek';
import React, { useState } from 'react';

function MainView() {
  // const [todos, setTodos]= useState("")
  const [calendar, setCalendar] = useState([{id: 15, open: 'hidden', calendarEvent: "Go to pilates classes"}]);

  const now = new Date();
  const daysinMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfTheWeek = now.getDay();
  const nameOfTheWeek = weekdays[dayOfTheWeek];
  const currentMonth = now.getMonth() + 1;
  const previousMonth = now.getMonth();
  const nextMonth = now.getMonth() +2;
  const currYear = now.getFullYear();
  const nameOfMonth = now.toLocaleString(
    'default', {month: 'long'}
  );
  const d = new Date(`${nameOfMonth} ${1}, ${currYear} 01:15:00`);
  let day = d.getDay();
  const today = now.getDate();
  const daysInPreviousMonth = new Date(currYear, previousMonth, 0).getDate();


  const setTodos = (data) => {
    let newData = [...calendar];

    newData.forEach((item, itemIndex) => {
      // console.log(calendar, (props.num+1 === (item && item.id)), props.num+1, item && item.id)
      if (data.id === (item && item.id)) {
        newData[itemIndex] = data;
        setCalendar(newData)
        // do I need this?
        // item.calendarEvent = event.target.value;
        // let newState = {id: props.num+1, open: 'open', calendarEvent: event.target.value}
        // return { ...newState }
      } else {
        setCalendar([...newData, data])
      }
      // console.log(calendar, 'cal')
      console.log(calendar, 'WHAAA')
    })


  }

  return (
    <div>
      <h1>Calendo for {nameOfMonth}</h1>
      <div className="card-wrapper">
        <DaysOfTheWeek day="Monday" />
        <DaysOfTheWeek day="Tuesday" />
        <DaysOfTheWeek day="Wednesday" />
        <DaysOfTheWeek day="Thursday" />
        <DaysOfTheWeek day="Friday" />
        <DaysOfTheWeek day="Saturday" />
        <DaysOfTheWeek day="Sunday" />
        {[...Array(day-1)]
          .map((num, i)=> <Card prevMonthCount={daysInPreviousMonth} num={day-1} iteration={i} />)
        }

        {[...Array(daysinMonth)]
          .map((num, i)=> <Card todayNr={today} year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek} setTodos={setTodos} />)
        }
      </div>

    </div>
  );
}

export default MainView
