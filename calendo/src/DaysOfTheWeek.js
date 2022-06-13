import './Card.css';

function DaysOfTheWeek(props) {
  return(
    <div className="mini-card">
      {props.day}
    </div>
  )
}

export default DaysOfTheWeek;
