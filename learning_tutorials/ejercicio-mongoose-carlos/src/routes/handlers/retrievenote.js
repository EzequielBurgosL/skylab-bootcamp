'use strict'

const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    return logic.retrieveNotes(id)
        .then(notes => {
            res.json({ status: 'OK', data: notes })
        })
        .catch(err => {
            res.json(err.message)
        })
}