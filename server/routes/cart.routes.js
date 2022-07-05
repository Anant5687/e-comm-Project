const express = require('express')
const { fetCartProducts } = require('../controllers/cart.controller')

const cartRouter = express.Router()

cartRouter.get('/allProducts/:userId', fetCartProducts)



module.exports = cartRouter