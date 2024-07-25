document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const userName = document.querySelector('#user-name');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const userLink = document.querySelector('#user-link');

    fetch('https://api.github.com/users/kauesouto')
    .then(function(r){
        return r.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        userName.innerText = json.login;
        repositories.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        userLink.href = json.html_url;
    })
    .catch(function(error){
        alert('Ocorreu um erro ao tentar buscar as informações. Tente novamente mais tarde.')
    })
})