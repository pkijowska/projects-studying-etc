import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state, changeState] = useState([{tab: 1, info: "Info one", active: 'active'}, {tab: 2, info:"Info two", active: 'hidden'}, {tab:3, info:"Info three", active: 'hidden'}])

  function handleSubmit(nr) {
    console.log('hey', nr)
    const newState = state.map(el=> {
      return (el.tab === nr) ? {...el, active: 'active'} : {...el, active: 'hidden'}
    })
    changeState(newState)
  }

  return (
    <div className="App">
    {state.map(el => {
    return(
      <div className="tab" onClick={()=> handleSubmit(el.tab)}>
        <div className="nr">
          Tab nr {el.tab}
        </div>
        <div className={`details ${el.active}`}>
          {el.info}
        </div>
      </div>)
    })}
    </div>
  );
}

export default App;
