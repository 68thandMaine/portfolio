const GithubService = {
  getRepos: async () => { 
    const response = await fetch('https://api.github.com/users/68thandMaine/repos?per_page=100');
    const repoArray = await response.json();
    const repositoryArray = []
    repoArray.forEach((repo) => {
      let dateCreated = new Date(repo.created_at);
      let reformattedRepo = {
        name: repo.name.replace(/-/, ' '),
        githubURL: repo.html_url,
        createdAt: dateCreated.toUTCString().split(' ', 4).join(' '), 
        description: (repo.description === null) ? "There is no provided description for this project." : repo.description,
        language: repo.language,
      }
      if (reformattedRepo.language !== null ) {
        repositoryArray.push(reformattedRepo);
      }
    });
    return repositoryArray;
    },
};

export default GithubService;