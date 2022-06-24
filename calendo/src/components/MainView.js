import '../App.css';
import Card from './Card.js';
import DaysOfTheWeek from './DaysOfTheWeek';
import EventView from './EventView';
import React, { useState, Fragment } from 'react';

function MainView() {
  const [calendar, setCalendar] = useState([
    {id: 1, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 2, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 3, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 4, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 5, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 6, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 7, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 8, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 9, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 10, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 11, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 12, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 13, isSubmitted: 'false', open: 'hidden', calendarEvent: ["Work out", "Go  and see grandma", "Book dentist"]},
    {id: 14, isSubmitted: 'false', open: 'open', calendarEvent: []},
    {id: 15, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 16, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 17, isSubmitted: 'false', open: 'hidden', calendarEvent: ["Read 50 pages of a book"]},
    {id: 18, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 19, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 20, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 21, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 22, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 23, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 24, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 25, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 26, isSubmitted: 'false', open: 'open', calendarEvent: []},
    {id: 27, isSubmitted: 'false', open: 'hidden', calendarEvent: ["Study react"]},
    {id: 28, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 29, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 30, isSubmitted: 'false', open: 'hidden', calendarEvent: []},
    {id: 31, isSubmitted: 'false', open: 'hidden', calendarEvent: ["Go to pilates classes"]
    }
  ]);

  const [curr, updateNumber] = useState();
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
  const thisMonth = calendar.slice(0, daysinMonth)
  // setCalendar(thisMonth)

  // const setTodos = (data) => {
  //   let newData = [...calendar];
  //
  //   const updatedClendar = newData.map((item, itemIndex) => {
  //
  //     if (data.id === (item && item.id)) {
  //       return newData[itemIndex] = data;
  //     } else {
  //       return item
  //     }
  //   })
  //   setCalendar(updatedClendar)
  //
  // }
  const clickedCard = (data) => {
    updateNumber(data)

  }

  const addEvent = (data) => {
    console.log(data, 'datas', curr)

    //map and return a new calendar event
    //use setCalendar
  }


  // {[...Array(exactDayOfWeek-1)]
  //   .map((num, i)=> <Card card={num} prevMonthCount={numberOfdaysInPreviousMonth} num={exactDayOfWeek-1} iteration={i} />)
  // }

  return (
    <Fragment>
    <h1 className="center">{nameOfMonth}, {currYear}</h1>
    <div className="calendar">
      <div className="card-wrapper">
        <DaysOfTheWeek day="Monday" />
        <DaysOfTheWeek day="Tuesday" />
        <DaysOfTheWeek day="Wednesday" />
        <DaysOfTheWeek day="Thursday" />
        <DaysOfTheWeek day="Friday" />
        <DaysOfTheWeek day="Saturday" />
        <DaysOfTheWeek day="Sunday" />

        {thisMonth
          .map((num, i)=> <Card card={num} todayNr={today} year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek} calendar={calendar} clickedCard={clickedCard}  />)
        }
      </div>
      <EventView calendar={calendar} addEvent={addEvent} day={curr}  year={now.getFullYear()}  month={nameOfMonth}/>

    </div>
    </Fragment>
  );
}

export default MainView
