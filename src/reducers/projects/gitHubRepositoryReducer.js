import * as types from '../../constants/ActionTypes';


const gitHubRepositoryReducer = ( state = {}, action ) => {
  let newState;
  switch(action.type) {
    case types.RECEIVE_REPOS: {
      newState = Object.assign ({}, state );
      newState = action.repoList;
      return newState;
    }
    default: 
    return state;
  }
};

export default gitHubRepositoryReducer;

