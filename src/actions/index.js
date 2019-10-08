import constants from '../constants';
import GithubService from '../services/api/GithubService.js';
const { action, initialState } = constants;


 export function getRepos() {
  return async function(dispatch) {
    try {
      const res =  await GithubService.getRepos();
      dispatch(receiveRepos(res));
    } catch (err) {
      return err;
    }
  };
}


// ACTION CREATOR
export function receiveRepos(repositoryList) {
// ACTION
  return {
    type: action.RECEIVE_REPOS,
    repoList: repositoryList
  };
}


export function receivePersonalProjects (personalProjects = initialState) {
  return {
    type: action.RECEIVE_PERSONAL_PROJECTS,
    personalProjectList: personalProjects
  };
}




