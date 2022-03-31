import React, { useState, useEffect } from 'react';

const MainCalc = () => {
  //display val
  let [numbers, setNumber] = useState([0]);
  let [total, addToTotal] = useState([0]);
  // let [storeNum, numberOperations] = useState([]);
  //operational values
  let [operateNum, pushNumbers] = useState([]);
  const handleClick = (e) => {
    //this will be working on every on click, we need to add numbers together before the plus happens
    const { innerText } = e.target;
    if (numbers[0] === 0) {
      const newArr = [...numbers];
      const [,...rest] = newArr;
      setNumber([rest, innerText].join(''));
      pushNumbers([rest, innerText])
      // console.log(numbers, 'numbers1')
    } else {
      setNumber([...numbers, innerText].join(''));
      pushNumbers([...operateNum, innerText])
      // console.log(operateNum, 'numbers2')
    }
  }

  const resetClick = () => {
    // numberOperations([])
    pushNumbers([])
    setNumber([0])
    addToTotal(0)
  }

  const handlePlus = () => {
    // pushNumbers(prevState => [...prevState, numbers]);
    if (operateNum.length > 2) {
      addToTotal(Number(total) + Number(operateNum.join('')))
      setNumber([operateNum.join('')])
      setNumber([0])
    } else {
      addToTotal(Number(total) + Number(operateNum.join('')))
      setNumber([0])
    }

    // const sumWithInitial = operateNum.reduce(
    //   (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
    //   0
    // );
    // setNumber([sumWithInitial])
    // pushNumbers(numbers)
   }

   // useEffect(() => {
   //   console.log(' ');
   // }, [numbers]);

  const handleResult = () => {
    setNumber(total)
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-wrapper__main">
        <div className="calculcator-panel">{numbers} </div>
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
