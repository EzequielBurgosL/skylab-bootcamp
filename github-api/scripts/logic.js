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




