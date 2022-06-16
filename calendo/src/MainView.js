import './App.css';
import Card from './Card.js';
import DaysOfTheWeek from './DaysOfTheWeek';
import React, { useState } from 'react';

function MainView() {
  const [calendar, setCalendar] = useState([{id: 15, open: 'hidden', calendarEvent: "Go to pilates classes"},
  {id: 22, open: 'hidden', calendarEvent: "Study react"}]);

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
      if (data.id === (item && item.id)) {
        newData[itemIndex] = data;
        setCalendar(newData)
      } else {
        setCalendar([...newData, data])
      }
      // console.log(calendar, 'WHAAA')
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
          .map((num, i)=> <Card todayNr={today} year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek} calendar={calendar} setTodos={setTodos} />)
        }
      </div>

    </div>
  );
}

export default MainView
