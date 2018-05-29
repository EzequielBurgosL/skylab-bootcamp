'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema({
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    } 
})

module.exports = Note