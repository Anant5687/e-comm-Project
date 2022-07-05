const express = require('express')
const { updateProduct, deleteProduct, getSingleData } = require('../controllers/admin.controller')
// const { verifyAdmin } = require('../utils/TokenCheck')
const adminRoutes = express.Router()

adminRoutes.get('/view/:id', getSingleData)

adminRoutes.put('/update/:id', updateProduct)

adminRoutes.delete('/delete/:id', deleteProduct)

module.exports = adminRoutes