import React, { useState, useEffect } from 'react';

const MainCalc = () => {
  let [display, setDisplay] = useState([0]);
  let [total, changeTotal] = useState([0]);
  let [singleNum, addSingleNum] = useState(0)
  //operational values
  const handleClick = (e) => {
    const { innerText } = e.target;
    if (display[0] === 0) {
      const newArr = [...display];
      const [,...rest] = newArr;
      setDisplay([rest, innerText].join(''));
      changeTotal(Number(total) + Number([rest, innerText].join('')))
      addSingleNum([rest, innerText].join(''))
    } else {
      setDisplay([...display, innerText].join(''));
      changeTotal(Number(total) - Number(singleNum) + Number([...display, innerText].join('')))
      addSingleNum(0)
    }
  }

  const resetClick = () => {
    // numberOperations([])
    setDisplay([0])
    changeTotal(0)
  }

  const handlePlus = () => {
    // pushNumbers(prevState => [...prevState, numbers]);
      setDisplay([0])
   }

  const handleResult = () => {
    setDisplay(total)
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-wrapper__main">
        <div className="calculcator-panel">{display} </div>
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
        <div onClick={handleClick} className="calculator-block"> - </div>
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
