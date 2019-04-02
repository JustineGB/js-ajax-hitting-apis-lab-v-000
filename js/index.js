function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositleaories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

// function displayBranches(el) {
//   const name = el.dataset.repo;
//   const req = new XMLHttpRequest();
//   req.addEventListener('load', showCommits);
//   req.open('GET', 'https://api.github.com/repos/' + name + '/:repo/branches');
//   req.send();
// }

function displayCommits() {}
function displayRepositories() {}
function getCommits(){}
function getBranches(){}
