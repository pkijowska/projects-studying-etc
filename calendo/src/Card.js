import './Card.css';

function Card(props) {

  // const d = new Date(`${props.nameOfMonth} ${props.num+1}, ${props.year} 01:15:00`);
  // let day = d.getDay();
  // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // console.log(props, props.today, props.num+1, props.today == props.num+1)
  return(
    <div className="card">
    {props.todayNr === props.num+1 ? <span className="card-today">{props.num+1}</span> : props.num+1 }
    </div>
  )
}

export default Card;
