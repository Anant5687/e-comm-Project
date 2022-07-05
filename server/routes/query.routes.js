const express = require('express')
const QueryPost = require('../controllers/query.controller')
const QueryRoute = express.Router()


QueryRoute.post('/query', QueryPost)


module.exports = QueryRoute;