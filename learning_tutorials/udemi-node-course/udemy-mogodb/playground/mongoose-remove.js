const {ObjectID} = require('mongodb')

const { mongoose } = require('./../server/db/mongose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result)=> {
//     console.log(result)
// })

Todo.findByIdAndRemove('5b1118568ca23f10528c6d8d').then((result) => {
    console.log(result)
})