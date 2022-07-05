const Product = require("../modal/productsSchema")
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'dbdtk77uc',
    api_key: "863992813938763",
    api_secret: 'CN6B_iWE_BXmRbeAX7tAXMJVFYc',
    secure: true
});

const postingProducts = async (req, res) => {
    const { name, desc, quantity, price, category } = req.body
    const imageFile = req.files.file.path
    cloudinary.uploader.upload(imageFile, async function (error, result) {
        if (error) {
        } else {
            const newProduct = new Product({
                name, img: result.url, desc, quantity, price, category
            })
            await newProduct.save()
            res.status(201).json(newProduct)
        }
    })
}

const getAllProducts = async (req, res) => {
    try {
        const allProduct = await Product.find()
        res.status(200).json(allProduct)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//Search Get API's

//Mobile

const mobileProducts = async (req, res) => {
    try {
        let mobiles = await Product.find({
            "$or": [
                { "category": { $regex: "Mobile" } }
            ]
        }
        )
        res.status(200).json(mobiles)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Watch

const watchProducts = async (req, res) => {
    try {
        let mobiles = await Product.find({
            "$or": [
                { "category": { $regex: "Watches" } }
            ]
        }
        )
        res.status(200).json(mobiles)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Toys

const ToyProducts = async (req, res) => {
    try {
        let mobiles = await Product.find({
            "$or": [
                { "category": { $regex: "Toys" } }
            ]
        }
        )
        res.status(200).json(mobiles)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
//Laptop

const LaptopProducts = async (req, res) => {
    try {
        let mobiles = await Product.find({
            "$or": [
                { "category": { $regex: "Laptop" } }
            ]
        }
        )
        res.status(200).json(mobiles)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
//Earphones
const EarphonesProducts = async (req, res) => {
    try {
        let mobiles = await Product.find({
            "$or": [
                { "category": { $regex: "Earphone" } }
            ]
        }
        )
        res.status(200).json(mobiles)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Cloths
const ClothsProducts = async (req, res) => {
    try {
        let mobiles = await Product.find({
            "$or": [
                { "category": { $regex: "Cloths" } }
            ]
        }
        )
        res.status(200).json(mobiles)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    postingProducts,
    getAllProducts,
    mobileProducts,
    watchProducts,
    ClothsProducts,
    EarphonesProducts,
    LaptopProducts,
    ToyProducts
}