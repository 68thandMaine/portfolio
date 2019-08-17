import { combineReducers } from 'redux';

import languageReducer from './project/languageReducer.js';
import projectListReducer from './project/projectListReducer.js';

const rootReducer = combineReducers({
  projects : projectListReducer,
  languages: languageReducer
});

export default rootReducer;