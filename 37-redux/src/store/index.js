import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import practice1Reducer from './practice1Reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  practice: practice1Reducer,
});

export default rootReducer;
