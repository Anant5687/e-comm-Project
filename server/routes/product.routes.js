const express = require('express')
const { postingProducts, getAllProducts, mobileProducts, watchProducts, ToyProducts, ClothsProducts, EarphonesProducts, LaptopProducts } = require('../controllers/products.controller')
const productRouter = express.Router()
const multipart = require('connect-multiparty')
const path = require('path')
const multiPartyMiddleWare = multipart({ uploadDir: path.join(__dirname, "uploads") })

productRouter.post('/post', multiPartyMiddleWare, postingProducts)

productRouter.get('/get', getAllProducts)

productRouter.get('/filter/Mobile', mobileProducts)

productRouter.get('/filter/Watch', watchProducts)

productRouter.get('/filter/Laptop', LaptopProducts)

productRouter.get('/filter/Toy', ToyProducts)

productRouter.get('/filter/Cloth', ClothsProducts)

productRouter.get('/filter/Earphone', EarphonesProducts)

module.exports = productRouter