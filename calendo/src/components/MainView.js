import '../App.css';
import Card from './Card.js';
import CardPreviousMonth from './CardPreviousMonth.js';
import DaysOfTheWeek from './DaysOfTheWeek';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import React, { useState, Fragment } from 'react';

function MainView(props) {

  const now = new Date();
  const daysinMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfTheWeek = now.getDay();
  const nameOfTheWeek = weekdays[dayOfTheWeek];
  const previousMonth = now.getMonth();
  const currYear = now.getFullYear();
  const nameOfMonth = now.toLocaleString(
    'default', {month: 'long'}
  );
  const fullDateOfFirstDayOfMonth = new Date(`${nameOfMonth} ${1}, ${currYear} 01:15:00`);
  let exactDayOfWeek = fullDateOfFirstDayOfMonth.getDay();
  const today = now.getDate();
  const numberOfdaysInPreviousMonth = new Date(currYear, previousMonth, 0).getDate();
  const thisMonth = props.events.slice(0, daysinMonth)

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
        {[...Array(exactDayOfWeek-1).keys()].reverse().map((num, i)=> <CardPreviousMonth cardNumber={num} prevMonthCount={numberOfdaysInPreviousMonth} num={exactDayOfWeek-1} iteration={i} />)
         }
        {thisMonth
          .map((num, i)=> <Card card={num} todayNr={today} year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek}  />)
        }
      </div>
      <SideBar todayNr={today} year={now.getFullYear()}  month={nameOfMonth}  />
    </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(MainView);
