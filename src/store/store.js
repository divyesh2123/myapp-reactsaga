import { createStore } from "redux";

import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducer";
import counterReducer from "../reducer/counterReducer";
import rootSaga from "../saga/rootSaga";



const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);


  export default store;