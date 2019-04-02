function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositleaories);
  req.open('GET', 'https://api.github.com/users/:username/repos');
  req.send();
}


function showRepositories() {
  console.log(this.responseText);
  let repoList = '<ul>';
  for (var i = 0; i < this.responseText.length; i++) {
    repoList += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}

function displayBranches(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/' + name + '/:repo/branches');
  req.send();
}



function displayCommits() {}
function displayRepositories() {}
function showRepositleaories() {}
function getCommits(){}
function getBranches(){}
