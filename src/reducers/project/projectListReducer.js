import * as types from '../../constants/ActionTypes';


const projectListReducer = ( state = {}, action ) => {
  let newState;
  switch(action.type) {
    case types.RECEIVE_REPOS: {
      newState = Object.assign ({}, state );
      newState = action.repoList;
      console.log(newState)
      return newState;
    }
    default: 
    return state;
  }
};

export default projectListReducer;

