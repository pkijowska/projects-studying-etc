import React, { useState, useEffect } from 'react';

const MainCalc = () => {
  let [display, setDisplay] = useState([0]);
  let [total, changeTotal] = useState(0);
  // let [number, changeNumber] = useState([]);
  let [number, showCurrent] = useState(false);
  let [final, showFinal] = useState(false);
  //as you type show type display, when adding add total,
  // let [singleNum, addSingleNum] = useState(0)
  //operational values
  const handleClick = (e) => {
    showCurrent(true)
    const { innerText } = e.target;
    console.log(number, 'number')
    if (display[0] === 0) {
      const newArr = [...display];
      const [,...rest] = newArr;
      setDisplay([rest, innerText].join(''));
      // changeNumber(Number([rest, innerText].join('')))
      // addSingleNum([rest, innerText].join(''))
      // changeTotal(number+ Number([rest, innerText].join('')))
    } else {
      setDisplay([...display, innerText].join(''));
      // changeNumber([...number, Number([...display, innerText].join(''))])
      // changeTotal()
      // addSingleNum(0)
    }

    console.log(number, 'num2?')
  }

  const resetClick = () => {
    // numberOperations([])
    setDisplay([0])
    changeTotal(0)
    // changeNumber([])
  }

  const handlePlus = () => {
    showCurrent(false)
    // pushNumbers(prevState => [...prevState, numbers]);
    setDisplay([Number(total) + number])
    changeTotal(Number(total) + number)
    // Number(total) - Number(singleNum)
    // setDisplay([0])
   }
   console.log(total, 'plus')

   // // do I need this?
   // useEffect(() => {
   //   // changeFinal(total)
   //   console.log('changed')
   // }, [total])

   // const handleMinus = () => {
   //   // pushNumbers(prevState => [...prevState, numbers]);
   //   changeTotal(Number(total) - number)
   //   // Number(total) - Number(singleNum)
   //   console.log(total, number, 'minus')
   //   setDisplay([0])
   //  }

  const handleResult = () => {
    setDisplay(total)
  }

  const showNumber = () => {
    if (number) {
      return display
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
        <div onClick={handleClick} className="calculator-block"> x </div>
        <div onClick={handleClick} className="calculator-block"> 4 </div>
        <div onClick={handleClick} className="calculator-block"> 5 </div>
        <div onClick={handleClick} className="calculator-block"> 6 </div>
        <div  className="calculator-block"> - </div>
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
