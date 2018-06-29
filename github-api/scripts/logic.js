'use strict'

// const axios = require('axios')

const logic = {
    url: 'https://api.github.com',
    // token: 'TOKEN',
    token: '8851a5ea19265e563cdbd906b9156124a05a5ba9',

    retrieveUser(username) {
        return Promise.resolve()
            .then(() => {
                if (typeof username !== 'string') throw Error('username is not a string')

                if (!username.trim().length) return

                return axios.get(`${this.url}/users/${username}`, { headers: { authorization: `Bearer ${this.token}` } })
                    .then(({ status, data }) => {

                        return data
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    }
}


// Get user form
var userForm = document.getElementById('user-form');

// Listen for submit
userForm.addEventListener('submit', userRetriever);

function userRetriever(e){
    e.preventDefault()

    var user = document.getElementById('user-input').value;

    logic.retrieveUser(user)
        .then(response => {
            
            console.log(response)

            var formattedUserOutput = `
            <ul >
                <li>Name: ${response.login}</li>
                <li>id: ${response.id}</li>
                <li>url: ${response.url}</li>
                <li><img src=${response.avatar_url}></li>            
            </ul>
            `;
            document.getElementById('formatted-user').innerHTML = formattedUserOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}



/* login: 'EzequielBurgosL',
  id: 36644436,
  node_id: 'MDQ6VXNlcjM2NjQ0NDM2',
  avatar_url: 'https://avatars3.githubusercontent.com/u/36644436?v=4' --> image
  url: 'https://api.github.com/users/EzequielBurgosL' */
  /*  public_repos: 3,
  public_gists: 0,
  followers: 3,
  following: 18,
  created_at: '2018-02-19T19:25:15Z',
  updated_at: '2018-06-25T16:19:47Z'  */