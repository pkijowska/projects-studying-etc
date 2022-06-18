import './App.css';
import Card from './Card.js';
import DaysOfTheWeek from './DaysOfTheWeek';
import React, { useState } from 'react';

function MainView() {
  const obj = []
  const [calendar, setCalendar] = useState([
    {id: 1, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 2, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 3, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 4, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 5, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 6, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 7, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 8, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 9, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 10, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 11, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 12, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 13, isSubmitted: 'false', open: 'hidden', calendarEvent: "Work out a lot"},
    {id: 14, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 15, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 16, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 17, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 18, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 19, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 20, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 21, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 22, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 23, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 24, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 25, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 26, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 27, isSubmitted: 'false', open: 'hidden', calendarEvent: "Be happy"},
    {id: 28, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 29, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 30, isSubmitted: 'false', open: 'hidden', calendarEvent: ""},
    {id: 31, isSubmitted: 'false', open: 'hidden', calendarEvent: "Go to pilates classes"}]);

  const now = new Date();
  const daysinMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfTheWeek = now.getDay();
  const nameOfTheWeek = weekdays[dayOfTheWeek];
  // const currentMonth = now.getMonth() + 1;
  const previousMonth = now.getMonth();
  // const nextMonth = now.getMonth() +2;
  const currYear = now.getFullYear();
  const nameOfMonth = now.toLocaleString(
    'default', {month: 'long'}
  );
  const fullDateOfFirstDayOfMonth = new Date(`${nameOfMonth} ${1}, ${currYear} 01:15:00`);
  let exactDayOfWeek = fullDateOfFirstDayOfMonth.getDay();
  const today = now.getDate();
  const numberOfdaysInPreviousMonth = new Date(currYear, previousMonth, 0).getDate();


  const setTodos = (data) => {
    let newData = [...calendar];

    newData.forEach((item, itemIndex) => {
      if (data.id === (item && item.id)) {
        newData[itemIndex] = data;
        setCalendar(newData)
      } else {
        setCalendar([...newData, data])
      }
    })


  }
  console.log('hey', calendar)
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
        {[...Array(exactDayOfWeek-1)]
          .map((num, i)=> <Card prevMonthCount={numberOfdaysInPreviousMonth} num={exactDayOfWeek-1} iteration={i} />)
        }

        {[...Array(daysinMonth)]
          .map((num, i)=> <Card todayNr={today} year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek} calendar={calendar} setTodos={setTodos} />)
        }
      </div>

    </div>
  );
}

export default MainView
