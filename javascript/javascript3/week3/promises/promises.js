// Lets use the github api to see what repositories different users have.
const username1 = 'gizemcandemir';
const username2 = 'mamathamereddy';
const username3 = 'sowmya1408';

const promise1 = fetch(`https://api.github.com/search/repositories?q=user:${username1}`);

const promise2 = fetch(`https://api.github.com/search/repositories?q=user:${username2}`);

const promise3 = fetch(`https://api.github.com/search/repositories?q=user:${username3}`);


// When you have the data for the different repositories, render the fullname of the repo, url of the repo, 
// and the owner of the repo.

function renderData(data) {
    const mainDiv = document.getElementById('users-repositories');
    const userName = document.createElement('h2');
    mainDiv.appendChild(userName);
    console.log(data);
    userName.innerHTML = data.items[0].owner.login;

    data.items.forEach(item => {
        const ul = document.createElement('ul');
        ul.innerHTML = `
            <li>Name: ${item.name}</li>
            <li>Url: <a href="${item.url}">${item.url}</a></li>
            <li>Owner: ${item.owner.login}</li>`;
        mainDiv.appendChild(ul);
    });
}

Promise.all([promise1, promise2, promise3])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(values => values.forEach(data => renderData(data)))
    .catch(err => console.log(err));
