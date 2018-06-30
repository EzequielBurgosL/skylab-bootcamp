'use strict'

// Get user form
const userForm = document.getElementById('user-form');

// Listen for submit
userForm.addEventListener('submit', userRetriever);


function userRetriever(e) {
    e.preventDefault()

    const user = document.getElementById('user-input').value;

    logic.retrieveUser(user)
        .then(response => {

            var formattedUserOutput = `
            <div class="formattedUserOutput">
                <section class="formattedUserOutput-header">
                    <img src=${response.avatar_url} class="formattedUserOutput-img"> 
                    <div class="header-right">
                        ${response.login ? `<p class="formattedUserOutput-header-item">@${response.login}</p>` : ''}         
                        ${response.name ? `<h2 class="formattedUserOutput-header-item">${response.name}</h2>` : ''}         
                        ${response.bio ? `<p class="formattedUserOutput-header-item bio">${response.bio}</p>` : ''}    
                    </div> 
                </section>
            </div>
            `;

            document.getElementById('formatted-user').innerHTML = formattedUserOutput;
        })
        .catch(error => {
            var formattedUserOutput = `
                ${user
                    ?
                    `<div class="error-message">No user with name <i>${user}</i> was found</div>`
                    :
                    `<div class="error-message">Please introduce a username</div>`}
                `;
            document.getElementById('formatted-user').innerHTML = formattedUserOutput;
        });


    logic.retrieveRepos(user)
        .then(response => {

            var formattedRepos = `
                <h3 class="list-header">Repositories</h3>
                <ul>
                    ${response.map((repos, item) => `
                    <li class="repos-list-item">
                        <div class="repo-name">${response[item].name}</div>
                        <div class="repo-info">
                            ${response[item].stargazers_count ? `<span> <img src="styles/images/star-image.png">${response[item].stargazers_count}</span>` : ``}
                            <span><img src="styles/images/fork-image.png"> ${response[item].forks}</span>
                        </div>
                    </li>`).join(' ')}
                </ul>
                `

            document.getElementById('formatted-repos').innerHTML = formattedRepos;
        })
        .catch(error => {
            var formattedRepos = ``;
            document.getElementById('formatted-repos').innerHTML = formattedRepos;
        });

}
