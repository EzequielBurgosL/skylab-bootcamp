'use strict'

const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { text } } = req // const note = req.body.note

    return logic.addNote(text)
        .then(note => {
            res.json({ status: 'OK', data: note })
        })
        .catch(err => {
            res.json(err.message)
        })
}