const {ObjectID} = require('mongodb')

const { mongoose } = require('./../server/db/mongose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

var id = '5b0852d7c1fb2dc4df098b57'

if(!ObjectID.isValid(id)){
    console.log('id not valid')
}

// Todo.find({_id: id})
//     .then((todos) => {
//         console.log('todos', todos)
//     })

// Todo.findOne({_id: id})
//     .then((todo) => {
//         console.log('todo', todo)
//     })

// Todo.findById(id)
//     .then((todo) => {
//         if(!todo) return console.log('id not found') 
//         console.log('todo', todo)
//     })
//     .catch((error) => console.log(error))

User.find({_id: id})
    .then((todos) => {
        console.log('todos', todos)
    })

User.findOne({_id: id})
    .then((todo) => {
        console.log('todo', todo)
    })

User.findById(id)
    .then((todo) => {
        if(!todo) return console.log('id not found') 
        console.log('todo', todo)
    })
    .catch((error) => console.log(error))

