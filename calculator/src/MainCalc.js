import React, { useState } from 'react';

const MainCalc = () => {
  let [value, setValue] = useState(0);
  let [numbers, setNumber] = useState([]);

  const handleClick = (e) => {
    const { innerText } = e.target;
    setNumber([...numbers, innerText].join(''));
    setValue(innerText);
  }

  console.log(numbers)

  const resetClick = () => {
    setValue(0)
  }

  //steps
  //ac to reset the state to 0
  // / to divide
  // + to add etc
  // = to finish

  return (
    <div className="calculator-wrapper">
      <div className="calculator-wrapper__main">
        <div className="calculcator-panel">{value} </div>
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
        <div onClick={handleClick} className="calculator-block"> + </div>
        <div onClick={handleClick} className="calculator-block"> 0 </div>
        <div onClick={handleClick} className="calculator-block"> , </div>
        <div onClick={handleClick} className="calculator-block"> = </div>
      </div>
    </div>
  )
}

export default MainCalc
