const GithubService = {
  getRepos: async () => { 
    const response = await fetch('https://api.github.com/users/68thandMaine/repos?per_page=100');
    const repoArray = await response.json();
    const repositoryArray = []
    repoArray.forEach((repo) => {
      let dateCreated = new Date(repo.created_at);
      let reformattedRepo = {
        name: repo.name,
        githubURL: repo.html_url,
        createdAt: dateCreated.toUTCString().split(' ', 4).join(' '),
        description: (repo.description === null) ? "There is no provided description for this project." : repo.description,
        language: repo.language,
      }
      // Some GH repos have a language of null. Just filter them out.
      if (reformattedRepo.language !== null ) {
        repositoryArray.push(reformattedRepo);
      }
    });
    return repositoryArray;
    },


};

/**
 * let created = new Date(transactionDate.replace(/-/g, '\/'));
  if (created <= today) {
    return created.toUTCString().split(' ', 4).join(' ');
 */

export default GithubService;