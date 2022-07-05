const Auth = require('../modal/authSchema')

const fetCartProducts = async (req, res) => {

    const id = req.params.userId
    try {
        const fetchProducts = await Auth.findOne({_id:id})
        // const { email, password, ...other } = fetchProducts._doc
        res.status(200).json(fetchProducts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = {
    fetCartProducts
}