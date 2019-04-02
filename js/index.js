function getRepositories() {
  const username = document.getElementById("username").value //input from form 
  const request = new XMLHttpRequest();
  request.addEventListener('load', displayRepositories);
  request.open('GET', 'https://api.github.com/users/' + username + "/repos");
  request.send();
}

function displayRepositories() {
  //alert(this.responseText);
   //const user = document.getElementById("username").value
   //alert(user);
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