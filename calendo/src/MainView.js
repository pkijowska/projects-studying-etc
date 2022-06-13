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

  return (
    <div>
      <ul>
        <li>
          Get the current month and how many days it has -> {daysinMonth} -> Today is {weekdays[dayOfTheWeek]}
        </li>
        <li>
          Each block will have a number (the day of the month, which can tell us what day of the week it was).
        </li>
        <li>
          For now just render 30 blocks of cards. Worry about days later :D
        </li>
        <li>
          We have to move the blocks depending on the first day of the month. If it is Wednesday. We need
        </li>
      </ul>
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
          .map((num, i)=> <Card year={now.getFullYear()} nameOfMonth={nameOfMonth} num={i} today={nameOfTheWeek} />)
        }
      </div>

    </div>
  );
}

export default MainView
