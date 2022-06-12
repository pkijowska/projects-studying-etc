import './App.css';
import Card from './Card.js';

function MainView() {
  const now = new Date();
  const daysinMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayOfTheWeek = now.getDay();
  console.log(weekdays[dayOfTheWeek])

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
      </ul>
      <div className="card-wrapper">
        {[...Array(daysinMonth)]
          .map(()=> <Card />)
        }
      </div>

    </div>
  );
}

export default MainView
