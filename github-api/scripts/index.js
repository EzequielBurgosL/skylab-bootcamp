
// Get user form
const userForm = document.getElementById('user-form');

// Listen for submit
userForm.addEventListener('submit', userRetriever);

// function userRetriever(e){
function userRetriever(e) {
    e.preventDefault()

    const user = document.getElementById('user-input').value;

    logic.retrieveUser(user)
        .then(response => {

            console.log(response)

            var formattedUserOutput = `
            <div class="formattedUserOutput">
                <ul >
                    <li class="formattedUserOutput-li">Name: ${response.login}</li>
                    <li>id: ${response.id}</li>
                    <li>url: ${response.url}</li>
                    <li><img src=${response.avatar_url}></li>            
                </ul>
            </div>
            `;
            document.getElementById('formatted-user').innerHTML = formattedUserOutput;
        })
        .catch(function (error) {
            console.log('this is the error ' + error);

            var formattedUserOutput = `
                <div class="error-message">No user with name ${user} was found</div>
            `;
            document.getElementById('formatted-user').innerHTML = formattedUserOutput;
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