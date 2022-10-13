import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

 const counter = useSelector(y=>y);

 const mydis = useDispatch();

 const myIncrement = ()=> {

    mydis({type : "INCREMENT_ASYNC"});
 }

 const myDecrement = ()=> {
  mydis({type : "DCREMENT_ASYNC"});
}


  return (
    <div className="App">
      {counter}
      <button onClick={myIncrement}>+</button>
      <button onClick={myDecrement}>-</button>
     
    </div>
  );
}

export default App;
