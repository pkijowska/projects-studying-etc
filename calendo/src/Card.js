import './Card.css';
import React, { useState } from 'react';

function Card(props) {
  const [calendar, setCalendar] = useState([{id: 15, open: 'hidden', calendarEvent: "Go to pilates classes"}]);

  // const d = new Date(`${props.nameOfMonth} ${props.num+1}, ${props.year} 01:15:00`);
  // let day = d.getDay();
  // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // console.log(props, props.today, props.num+1, props.today == props.num+1)
  // console.log(props.num === undefined ? props.prevMonthCount)
  const renderCurrentMonthCount = props.todayNr === props.num+1 ? <span className="card-today">{props.num+1}</span> : props.num+1;
  const checkForPreviousMonth = props.prevMonthCount ? props.prevMonthCount - props.num+1+props.iteration : renderCurrentMonthCount;

  const handleClick = (e) => {
    // console.log(props.num+1,'hey')
    // setCalendar([{open: 'open', id: props.num+1}, ...calendar])
  }

  const handleTodo = (event) => {
    var newData = [...calendar];
    // newData[id].title = title;
    // this.setState({newData});

    newData.forEach((item, itemIndex) => {
      // console.log(calendar, (props.num+1 === (item && item.id)), props.num+1, item && item.id)
      console.log(item && item.id, props.num+1)
      if (props.num+1 === (item && item.id)) {
        newData[itemIndex].calendarEvent = event.target.value;
        setCalendar(newData)
        //do I need this?
        // item.calendarEvent = event.target.value;
        // let newState = {id: props.num+1, open: 'open', calendarEvent: event.target.value}
        // return { ...newState }
      } else {
        let newState = {id: props.num+1, open: 'open', calendarEvent: event.target.value}
        setCalendar([...calendar, newState])
      }
      console.log(calendar, 'cal')

    })

  }

    // setCalendar((prevValue)=> {
    //   return prevValue.map((item, itemIndex) => {
    //   // console.log(calendar, (props.num+1 === (item && item.id)), props.num+1, item && item.id)
    //   if (props.num+1 === (item && item.id)) {
    //     console.log('hey1')
    //     //do I need this?
    //     // item.calendarEvent = event.target.value;
    //     let newState = {id: props.num+1, open: 'open', calendarEvent: event.target.value}
    //     return { ...newState }
    //   } else {
    //     let newState = {id: props.num+1, open: 'open', calendarEvent: event.target.value}
    //
    //     return [newState, {"a":1,"b":2,"c":3} ]
    //   }

      // } else {
      //   console.log('hey2', calendar)
      //   let newState = {id: props.num+1, open: 'open', calendarEvent: event.target.value}
      //   return [...calendar,
      //         {...newState }]
      //
        // }
      // })
//     }
// )

    // setCalendar([ {calendarEvent: event.target.value, id: props.num+1}, ...calendar ])
    // const item = {calendarEvent: event.target.value, id: props.num+1, open: 'open'}
    // const foundIndex = calendar.findIndex(x => x.id == item.id);
    // items[foundIndex] = item;
    // console.log(calendar, 'cal')
  // }
  // console.log(calendar.find((x)=>x===15))
  const todoSnippet = <div className={`todo ${calendar.open}`}>  <textarea
          value={calendar.calendarEvent}
          onChange={handleTodo}
          rows={5}
          cols={5}
        /> </div>

  return(
    <div onClick={handleClick} className="card">
    { checkForPreviousMonth }
    {todoSnippet}
    </div>
  )
}

export default Card;
