const mongoose = require('mongoose')

const link = "mongodb+srv://AnantJindal:5687Anant@cluster0.vmis4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(link).then(() => {
    console.log("Db connected")
}).catch((err) => {
    console.log(err)
})