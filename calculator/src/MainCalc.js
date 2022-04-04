import React, { useState, useEffect } from 'react';

const MainCalc = () => {
  let [display, setDisplay] = useState([0]);
  let [total, changeTotal] = useState([0]);
  let [number, showCurrent] = useState(false);
  let [final, showFinal] = useState(false);

  const handleClick = (e) => {
    showCurrent(true)
    const { innerText } = e.target;
    if (display[0] === 0) {
      const newArr = [...display];
      const [,...rest] = newArr;
      setDisplay([rest, innerText].join(''));
      console.log(total, 'what is total?')
    } else {
      setDisplay([...display, innerText].join(''));
      console.log('wtf', [...display, innerText].join(''), total)
    }
  }

  const resetClick = () => {
    setDisplay([0])
    changeTotal([0])
  }

  const handlePlus = () => {
    showCurrent(false)
    changeTotal([Number(total) + Number(display)])
    console.log(total, Number(total) + Number(display), display, 'total')
    setDisplay([0])
   }

   // // do I need this?
   // useEffect(() => {
   //   // changeFinal(total)
   //   console.log('changed')
   // }, [total])

   const handleTimes = () => {
     // pushNumbers(prevState => [...prevState, numbers]);
     showCurrent(false)
     console.log('display', total)
     if (total[0] !== 0) {
       changeTotal([Number(total) * Number(display)])
     } else {
       changeTotal([Number(display)])
     }
     console.log(total, display, Number(total) * Number(display), 'times')
     setDisplay([0])
    }

  const handleResult = () => {
    setDisplay(total)
  }

  const showNumber = () => {
    if (number) {
      console.log('number')
      return display
    } else {
      console.log('total')
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
