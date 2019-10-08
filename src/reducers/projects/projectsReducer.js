import * as types from '../../constants/ActionTypes';

const projectsReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case types.RECEIVE_PERSONAL_PROJECTS: {
      newState = Object.assign({}, state);
      newState = action.personalProjectList;
      return newState;
    }
    default:
      return state;
    }
};

export default projectsReducer;