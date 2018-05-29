'use strict'

const mongoose = require('mongoose')
const Note = require('./notes')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    surname: {
        type: String,
        minlength: 1,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    notes: [Note]
})

const User = mongoose.model('Note', userSchema)
module.exports = User