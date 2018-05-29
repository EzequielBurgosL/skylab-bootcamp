'use strict'

const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    return logic.deleteNote(id)
        .then(notes => {
            res.json({ status: 'OK' })
        })
        .catch(err => {
            res.json(err.message)
        })
}