const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
    ques: {
        type:String,
        require: true
    }
}, {
    timestamps: true
})

const Query =  mongoose.model('Query', QuerySchema)

module.exports = Query;