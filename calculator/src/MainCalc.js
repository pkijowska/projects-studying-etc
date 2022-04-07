import React, { useState, useEffect } from 'react';

const MainCalc = () => {
  let [start, changeInitialValue] = useState(true)
  let [display, setDisplay] = useState([0]);
  let [sencondDisplay, changeSecond] = useState([0]);
  let [firstNumber, firstIsTaken] = useState(false);
  let [total, changeTotal] = useState([0]);
  let [number, showCurrent] = useState(false);
  let [final, showFinal] = useState(false);
  let [lastNumber, takeLastNumber] = useState([0]);
  let [add, addNumber] = useState(false);

  //current problem - operations being done too early. need to calc before +
  //type nr, add to display. when adding remember it is plus. dont do anything after another display add these two.

  const handleClick = (e) => {
    showCurrent(true)
    const { innerText } = e.target;
    changeInitialValue(false)
    // if (display[0] === 0) {
    //   const newArr = [...display];
    //   const [,...rest] = newArr;
    //   // if (firstNumber) {
    //   //   sencondDisplay([rest, innerText].join(''))
    //   // } else {
    //   //   setDisplay([rest, innerText].join(''));
    //   // }
    if (!firstNumber) {
      setDisplay([...display, innerText].join(''));
    } else {
      changeSecond([...sencondDisplay, innerText].join(''));
    }
    //   // changeTotal([rest, innerText].join(''))
    // } else {
    //   takeLastNumber([...display, innerText].join(''));
        // changeSecond([...display, innerText].join(''))
        // console.log(changeSecond([...display, innerText].join('')), 'change')
      // } else {
      //   setDisplay([...display, innerText].join(''));
      // }
    //   // changeTotal([...display, innerText].join(''));
    // }
  }
  console.log(display, 'display', Number(sencondDisplay), add)

  const resetClick = () => {
    setDisplay([0])
    changeTotal([0])
    firstIsTaken(false)
    changeSecond([0])
  }

  const handlePlus = () => {
    addNumber(true)
    showCurrent(false)
    firstIsTaken(true)
    // changeTotal([Number(total) + Number(display)])
    // setDisplay([0])
   }

   // do I need this?
   useEffect(() => {
     // changeFinal(total)
     // console.log(lastNumber, 'changed', total)
     if (add) {
       changeTotal(Number(display) + Number(sencondDisplay))
     }
     console.log(total, 'to')
   })

   const handleTimes = () => {
     // pushNumbers(prevState => [...prevState, numbers]);
     showCurrent(false)
     if (total[0] !== 0) {
       changeTotal([Number(total) * Number(display)])
     } else {
       changeTotal([Number(display)])
     }
     setDisplay([0])
    }

  const handleResult = () => {
    setDisplay(total)
  }

  const showNumber = (num) => {
    if (start) {
      return 0
    } else if (number && (!firstNumber)) {
      return parseInt(display, 10)
    } else if (firstNumber) {
        return parseInt(sencondDisplay, 10)
    } else {
      return total
    }
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-wrapper__main">
        <div className="calculcator-panel">{showNumber()} </div>
        <div onClick={resetClick} className="calculator-block"> AC </div>
        <div onClick={handleClick} className="calculator-block"> +/- </div>
        <div onClick={handleClick} className="calculator-block"> % </div>
        <div onClick={handleClick} className="calculator-block"> / </div>
        <div onClick={handleClick} className="calculator-block"> 7 </div>
        <div onClick={handleClick} className="calculator-block"> 8 </div>
        <div onClick={handleClick} className="calculator-block"> 9 </div>
        <div onClick={handleTimes} className="calculator-block"> x </div>
        <div onClick={handleClick} className="calculator-block"> 4 </div>
        <div onClick={handleClick} className="calculator-block"> 5 </div>
        <div onClick={handleClick} className="calculator-block"> 6 </div>
        <div className="calculator-block"> - </div>
        <div onClick={handleClick} className="calculator-block"> 1 </div>
        <div onClick={handleClick} className="calculator-block"> 2 </div>
        <div onClick={handleClick} className="calculator-block"> 3 </div>
        <div onClick={handlePlus} className="calculator-block"> + </div>
        <div onClick={handleClick} className="calculator-block"> 0 </div>
        <div onClick={handleClick} className="calculator-block"> , </div>
        <div onClick={handleResult} className="calculator-block"> = </div>
      </div>
    </div>
  )
}

export default MainCalc
