const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    items: {
        type: [ ]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const Auth = new mongoose.model('Auth', AuthSchema)

module.exports = Auth