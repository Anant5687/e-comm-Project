const Product = require("../modal/productsSchema")

const getSingleData = async (req, res) => {
    try {
        const { id } = req.params
        const getIndividualData = await Product.findById({ _id: id })
        res.status(201).json(getIndividualData)

    } catch (error) {
        res.status(404).json(error)
    }
}

const updateProduct = async (req, res) => {
    console.log("params", req.params)
    const id = req.params.id
    console.log(id)
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
        console.log("19", updateProduct)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status().json({ message: error.message })
    }
}


const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const deleteItem = await Product.findByIdAndDelete({ _id: id })
        res.status(202).json(deleteItem)
    } catch (error) {
        res.status().json({ message: error.message })
    }
}

module.exports = {
    updateProduct,
    deleteProduct,
    getSingleData
}