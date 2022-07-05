const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    category: {
        type: String,
        require: true
    },
    img: {
        type: [String]
    },
    name: {
        type: String
    },
    desc: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
})

const Product = new mongoose.model('Product', productSchema)

module.exports = Product