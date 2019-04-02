function getRepositories() {
  const username = document.getElementById("username").value //input from form 
  const request = new XMLHttpRequest();
  request.addEventListener('load', displayRepositories);
  request.open('GET', 'https://api.github.com/users/' + username + "/repos");
  request.send();
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos
    .map(r => '<li>' + 
         r.name  
         + r.html_url 
        // + ' - <a href="#" data-repo="' + r.name + '"${repo.html_url}"> repo.html_url </a>'
         + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' 
         + ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>'
        )
    .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) { 
  const name = el.dataset.repo;
    const username = document.getElementById("username").value //input from form 

  //const username = el.dataset.username;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + name + '/commits');
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.committer.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;
}



function getBranches(){}
// function displayBranches(el) {
//   const name = el.dataset.repo;
//   const req = new XMLHttpRequest();
//   req.addEventListener('load', showCommits);
//   req.open('GET', 'https://api.github.com/repos/' + name + '/:repo/branches');
//   req.send();
// }