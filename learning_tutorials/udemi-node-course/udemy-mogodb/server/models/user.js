var  mongoose = require('mongoose')

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    surname: {
        type: String,
        minlength: 1,
        trim: true,
        default: undefined
    },
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true,
    }  
});

module.exports = {User}