'use strict'

const express = require('express')
const logic = require('../logic/index')
const bodyParser = require('body-parser')
const Note = require('../models/notes')
const User = require('../models/User')
const { listnotes, createnote, retrievenotes, updatenote, deletenote } = require('./handlers')
// const listnotes = require('../routes/handlers/listnotes')
// const retrievenotes = require('../routes/handlers/retrievenote')
// const createnote = require('../routes/handlers/createnote')
// const updatenote = require('../routes/handlers/updatenote')
// const deletenote = require('../routes/handlers/deletenote')

const bodyParserJSON = bodyParser.json()

const router = express.Router();


router.post('/create-note', bodyParserJSON, createnote);

router.get('/list-notes', listnotes)

router.get('/retrieve-note/:id', retrievenotes);

router.put('/update-note/:id', bodyParserJSON, updatenote);

router.delete('/delete-note/:id', deletenote);

router.delete('/clear-list', (req, res) => {

    return logic.clearList()
        .then(notes => {
            res.json({ status: 'OK' })
        })
        .catch(err => {
            res.json(err.message)
        })
});

router.post('/create-user', (req, res) => {

    return User.find()
        .then(notes => {
            res.json({ status: 'OK', data: notes })
        })
        .catch(err => {
            res.json(err.message)
        })
})
router.get('/list-users', (req, res) => {

    return User.find()
        .then(notes => {
            res.json({ status: 'OK', data: notes })
        })
        .catch(err => {
            res.json(err.message)
        })
})

module.exports = router