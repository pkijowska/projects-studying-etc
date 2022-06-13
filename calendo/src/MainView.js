import './App.css';
import Card from './Card.js';
import DaysOfTheWeek from './DaysOfTheWeek';

function MainView() {

  const now = new Date();
  const daysinMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfTheWeek = now.getDay();
  const nameOfTheWeek = weekdays[dayOfTheWeek];
  const currentMonth = now.getMonth() + 1;
  const currYear = now.getFullYear();
  const nameOfMonth = now.toLocaleString(
    'default', {month: 'long'}
  );
  const d = new Date(`${nameOfMonth} ${1}, ${currYear} 01:15:00`);
  let day = d.getDay();
  const today= now.getDate();

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
          .map((num, i)=> <Card  />)
        }

        {[...Array(daysinMonth)]
          .map((num, i)=> <Card todayNr={today} year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek} />)
        }
      </div>

    </div>
  );
}

export default MainView
