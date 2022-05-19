import React, { useState, useEffect } from 'react';

const MainCalc = () => {
  // let [start, changeInitialValue] = useState(true)
  // let [display, setDisplay] = useState([0]);
  let [operatorClickedFirstTime, operatorClick] = useState(false);
  let [total, changeTotal] = useState([0]);
  let [number, showCurrent] = useState(false);
  // let [final, showFinal] = useState(false);
  // let [lastNumber, takeLastNumber] = useState([0]);
  // let [add, addNumber] = useState(false);
  // let [arr, changeArr] = useState([])
  //
  // //display 1.. when typing add numbers [10, 100, 1005]
  //
  const handleClick = (e) => {
    // showCurrent(true)
    // const { innerText } = e.target;
    // changeInitialValue(false)
    // console.log([...display, innerText], 'inner')
    // setDisplay([...display, innerText].join(''))
    //
    // if (!arr.length) {
    //   changeArr([parseInt(display, 10)])
    //   console.log('first', arr)
    // } else {
    //   console.log(arr, 'array1')
    //   let [first, ...mainArr] = arr
    //   console.log(mainArr, 'mainArr')
    //   changeArr([...arr, parseInt(display, 10)])
    // }
    // // arr = arr.concat([parseInt(display, 10)])
    // // console.log(arr, 'arr')
    // showCurrent(false)
    //
    // if (add) {
    //   console.log('add', total, parseInt(display, 10))
    // }
  }

  const resetClick = () => {
    // setDisplay([0])
    // changeTotal([0])
    // changeInitialValue(true)
    // addNumber(false)
  }
  //
  const handlePlus = () => {
    // addNumber(true)
    //
    // changeTotal(Number(total) + Number(display))
    //
    // showCurrent(false)
    // showFinal(true)
    // firstIsTaken(true)
    // setDisplay([0])
    //
    // // changeTotal([Number(total) + Number(display)])
    // console.log(total, 'total')
   }
  //
  //  // do I need this?
  //  useEffect(() => {
  //    // changeFinal(total)
  //    // console.log(lastNumber, 'changed', total)
  //    console.log(arr, 'rrr')
  //
  //  }, [arr])
  //
   const handleTimes = () => {
     // addNumber(false)
     //
     // // pushNumbers(prevState => [...prevState, numbers]);
     // showCurrent(false)
     // console.log(total, display, 'times')
     // // changeTotal([Number(display)])
     //
     // setDisplay([0])
    }
  //
  const handleResult = () => {
    // setDisplay(total)
  }
  //
  // // const showNumber = (num) => {
  // //   if (start) {
  // //     console.log('start')
  // //     return 0
  // //   } else if (number && (!firstNumber)) {
  // //     console.log('second')
  // //     return parseInt(display, 10)
  // //   } else if (firstNumber) {
  // //     return parseInt(sencondDisplay, 10)
  // //   } else {
  // //     console.log('fourth')
  // //     return total
  // //   }
  // // }
  //
  // const showNumber = () => {
  //   if (start) {
  //     return 0
  //   } else {
  //     return parseInt(display, 10)
  //   }
  // }

  // ***************************** \\
  // Basically what needs to be done:
  // Is it number? Display number. Is it operation? Display total. Sum? Display total.
  // 1. Check if the operation is clicked first for the first time= if yes, then convert what is typed into total
  // 2. if the operation is not first then check operator (if first operation check)
  // 3. If the operator is clicked show total
  // 4. What is being typed add to total.
  // 5. Register the previous number and if there is more numbers added extract from total

  // Things I need:
  // total
  // number
  // operatorClickedFirstTime
  //
  // ***************************** \\


  return (
    <div className="calculator-wrapper">
      <div className="calculator-wrapper__main">
        <div className="calculcator-panel">
         </div>
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
