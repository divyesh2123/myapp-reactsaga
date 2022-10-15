import { combineReducers } from "redux";
import counterReducer from './counterReducer';
import userREeducer from './UserReducer';

const rootReducer = combineReducers(
    {
    conuter:  counterReducer,
    user: userREeducer
    }
)

export default rootReducer;