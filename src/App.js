import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {

 const counter = useSelector(y=>y.counter);

 const mdata = useSelector(y=>y.user);

 console.log(mdata);

 const mydis = useDispatch();

 const myIncrement = ()=> {

    mydis({type : "INCREMENT_ASYNC"});
 }

 const myDecrement = ()=> {
  mydis({type : "DCREMENT_ASYNC"});
}

useEffect(()=> {
  mydis({type :"GET_USERS_REQ"});

},[])

  return (
    <div className="App">
      {counter}
      <button onClick={myIncrement}>+</button>
      <button onClick={myDecrement}>-</button>

      {
        mdata.data.map((t)=> {
          return (<div>{t.name}</div>)
        })
      }
     
    </div>
  );
}

export default App;
