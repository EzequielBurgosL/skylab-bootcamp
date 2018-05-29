'use strict'

const Note = require('../models/notes')


module.exports = {

    listnotes() {
        return Note.find({})
    },
    addNote(text) {
        return Note.create({ text })
    },
    retrieveNotes(id) {
        return Note.find({ _id: id.toString() })
    },
    updateNotes(id, text) {
        return Note.findOneAndUpdate({ _id: id.toString() }, { $set: { text } })
    },
    deleteNote(id) {
        return Note.remove({ _id: `${id}` })
    },
    clearList() {
        return Note.remove({})
    }

}