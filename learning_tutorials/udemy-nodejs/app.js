const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0]


if (command === 'add') {
    console.log('adding new note')
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('note created')
        notes.logNote(note)
    } else {
        console.log('there is already a title like this')
    }
} else if (command === 'list') {
    console.log('listing all notes')
    var allNotes = notes.getAll()
    console.log(`Printing: ${allNotes.length} notes(s)`)
    allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
    console.log('reading note')
    var noteRead = notes.getNote(argv.title)
    var message = noteRead ? `note was read, this is the title ${noteRead.title}` : 'unable to get the note'
    console.log(message)
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'note was removed' : 'note not found'
    console.log(message)
   
} else{
    console.log('commmand not found')
}