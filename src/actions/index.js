import constants from '../constants';
import GithubService from '../services/api/GithubService.js';
const { action } = constants;

 export function getRepos() {
   console.log('getRepos')
  return async function(dispatch) {
    try {
      const res =  await GithubService.getRepos();
      dispatch(receiveRepos(res));
      return res;
    } catch (err) {
      return err;
    }
  };
}


// ACTION CREATOR
function receiveRepos(repositoryList) {
// ACTION
  return {
    type: action.RECEIVE_REPOS,
    repoList: repositoryList
  };
}




