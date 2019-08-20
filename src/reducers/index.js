import { combineReducers } from 'redux';
import gitHubRepositoryReducer from './projects/gitHubRepositoryReducer.js';
import projectsReducer from './projects/projectsReducer.js';

const rootReducer = combineReducers({
  gitHubRepositories : gitHubRepositoryReducer,
  personalProjects : projectsReducer
});

export default rootReducer;