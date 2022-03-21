import React, { useState } from 'react';

const MainCalc = () => {
  let [value, setValue] = useState(0);
  let [numbers, setNumber] = useState([0]);
  let [storeNum, numberOperations] = useState([]);

  const handleClick = (e) => {
    const { innerText } = e.target;
    if (numbers[0] === 0) {
      const newArr = [...numbers];
      const [,...rest] = newArr;
      setNumber([rest, innerText].join(''));
    } else {
      setNumber([...numbers, innerText].join(''));
    }
    setValue(innerText);
  }

  const resetClick = () => {
    setNumber([0])
    numberOperations([])
  }

  const handlePlus = () => {
    numberOperations([...storeNum, numbers])
    console.log(storeNum, 'num');
  }

  const handleResult = () => {
    const sumWithInitial = storeNum.reduce(
      (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
      0
    );
    console.log(sumWithInitial, 'together', storeNum)
  }

  //steps
  //ac to reset the state to 0
  // / to divide
  // + to add etc
  // = to finish

  return (
    <div className="calculator-wrapper">
      <div className="calculator-wrapper__main">
        <div className="calculcator-panel">{numbers} </div>
        <div onClick={resetClick} className="calculator-block"> AC </div>
        <div onClick={handlePlus} className="calculator-block"> +/- </div>
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
