require('./config/Db')
const express = require('express')
const cors = require('cors')
const QueryRoute = require('./routes/query.routes')
const productRouter = require('./routes/product.routes')
const authRouter = require('./routes/auth.routes')
const fetchRouter = require('./routes/fetching.routes')
const adminRoutes = require('./routes/admin.routes')
const cookieParser = require('cookie-parser')
const cartRouter = require('./routes/cart.routes')

const Port = process.env.Port || 8989

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use('/contact', QueryRoute)
app.use('/product', productRouter)
app.use('/auth', authRouter)
app.use('/fetch',fetchRouter)
app.use('/admin',adminRoutes)
app.use('/cart',cartRouter)

app.listen(Port,()=>{
    console.log(`server is running at ${Port}`)
})