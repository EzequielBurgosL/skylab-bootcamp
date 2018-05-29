'use strict'

const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id }, body: { text } } = req

    return logic.updateNotes(id, text)
        .then(notes => {
            res.json({ status: 'OK', data: notes })
        })
        .catch(err => {
            res.json(err.message)
        })
}