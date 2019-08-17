const GithubService = {
  getRepos: async () => { 
    const response = await fetch('https://api.github.com/users/68thandMaine/repos?per_page=100');
    const repoArray = await response.json();
    return repoArray;
  },

};

export default GithubService;