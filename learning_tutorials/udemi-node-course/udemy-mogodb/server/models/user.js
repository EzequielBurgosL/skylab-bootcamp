const mongoose = require('mongoose')
const validator = require('validator')

var User = mongoose.model('User', {
    // name: {
    //     type: String,
    //     required: true,
    //     minlength: 1,
    //     trim: true
    // },
    // surname: {
    //     type: String,
    //     minlength: 1,
    //     trim: true,
    //     default: undefined
    // },
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }

    }]
});

module.exports = { User }