import { combineReducers } from 'redux';
import projectListReducer from './project/projectListReducer.js';

const rootReducer = combineReducers({
  projects : projectListReducer,
});

export default rootReducer;