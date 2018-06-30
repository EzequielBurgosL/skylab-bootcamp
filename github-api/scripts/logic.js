'use strict'

const logic = {
    url: 'https://api.github.com',
    
    // A generated token required to access Github's Api services
    token: '8851a5ea19265e563cdbd906b9156124a05a5ba9',

    /**
    * 
    * @description This function makes an axios request to the Github Api to get user information 
    * 
    * @method GET
    * @param {username} username  - Github user's credential
    * @returns {[data]} - Returns an array with user's Github info 
    * @throws {error} - Throws error when request could not reach server or when no username matches the request
    */
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
    },

    /**
    * 
    * @description This function makes an axios request to the Github Api to get user repositories information 
    * 
    * @method GET
    * @param {username} username  - Github user's credential
    * @returns {[data]} - Returns an array with user's Github repositories info 
    * @throws {error} - Throws error when request could not reach server or when no username matches the request
    */
    retrieveRepos(username) {
        return Promise.resolve()
            .then(() => {
                if (typeof username !== 'string') throw Error('username is not a string')

                if (!username.trim().length) return

                return axios.get(`${this.url}/users/${username}/repos`, { headers: { authorization: `Bearer ${this.token}` } })
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




