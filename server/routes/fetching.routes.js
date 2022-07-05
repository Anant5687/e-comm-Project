const express = require('express')
const { fetchingCartItemById, DeletingCartItemById, OrderingFullCartItem } = require('../controllers/fetchingCart.controller')
const fetchRouter = express.Router()

fetchRouter.post('/:userId/:itemId', fetchingCartItemById)

fetchRouter.delete('/:userId/:itemId', DeletingCartItemById)

fetchRouter.delete('/:userId', OrderingFullCartItem)

module.exports = fetchRouter;