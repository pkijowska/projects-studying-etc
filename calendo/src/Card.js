import './Card.css';
function Card(props) {

  const d = new Date(`${props.nameOfMonth} ${props.num+1}, ${props.year} 01:15:00`);
  let day = d.getDay();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return(
    <div className="card">
    {props.num+1} {weekdays[day]}
    </div>
  )
}

export default Card;
