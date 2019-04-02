function getRepositories() {
  const username = document.getElementById("username").value //input from form 
  const request = new XMLHttpRequest();
  request.addEventListener('load', displayRepositories);
  request.open('GET', 'https://api.github.com/users/' + username + "/repos");
  request.send();
}

function displayRepositories() {
    console.log(this.responseText);
  let repoList = '<ul>';
  for (var i = 0; i < this.responseText.length; i++) {
    repoList += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(){}
function displayCommits() {}
function getBranches(){}
// function displayBranches(el) {
//   const name = el.dataset.repo;
//   const req = new XMLHttpRequest();
//   req.addEventListener('load', showCommits);
//   req.open('GET', 'https://api.github.com/repos/' + name + '/:repo/branches');
//   req.send();
// }