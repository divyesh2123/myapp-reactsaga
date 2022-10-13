import { createStore } from "redux";

import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import counterReducer from "../reducer/counterReducer";
import rootSaga from "../saga/rootSaga";



const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);


  export default store;