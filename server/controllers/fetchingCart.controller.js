const Auth = require('../modal/authSchema')
const Product = require('../modal/productsSchema')

const fetchingCartItemById = async (req, res) => {

    const { userId, itemId } = req.params
    const newItem = await Product.findOne({ _id: itemId })
    //1
    try {
        //2
        try {
            const getItem = await Auth.findByIdAndUpdate(userId, {

                $push: { items: { id: newItem._id, name: newItem.name, img: newItem.img, price: newItem.price, quantity: 1 } }
            }, { new: true })

            //For Finding How Much Quantity Do You Added In Your Cart

            const quantityOfEachProducts = getItem.items.find(item => item.quantity === 1);
            const resultValue = quantityOfEachProducts['quantity'];

            console.log(`${itemId} added That quantity of ${resultValue}`)

            //For Updating Product By Added Quantity
            try {
                const updateProduct = await Product.findByIdAndUpdate(itemId, {
                    $push: { items: { quantityLeft: quantity - resultValue } }
                },
                    { new: true })
                console.log(updateProduct, "updateProduct")
            } catch (error) {
                res.status(404).json({ message: message.error })
            }

        } catch (error) {
            res.status(404).json({ message: message.error })
        }
        res.status(201).json(getItem)
    } catch (error) {
        res.status(404).json(error)
    }
}


//Update product when added into cart
// const updatedProductWhenAddedIntoCart = async (req, res) => {
//     const { itemId } = req.params
//     try {
//         const updateProduct = await Product.findByIdAndUpdate(itemId)
//     } catch (error) {
//         res.status(404).json({ message: message.error })
//     }
// }


const DeletingCartItemById = async (req, res) => {

    const { userId, itemId } = req.params
    const newItem = await Product.findOne({ _id: itemId })

    try {

        try {

            const getItem = await Auth.findByIdAndUpdate(userId, {
                $pull: { items: { id: newItem._id, name: newItem.name, img: newItem.img, price: newItem.price, quantity: 1 } }
            }, { new: true })


            res.status(201).json(getItem)

        } catch (error) {
            res.status(404).json({ message: message.error })
        }

    } catch (error) {
        res.status(404).json(error)
    }
}


const OrderingFullCartItem = async (req, res) => {

    const { userId } = req.params

    try {
        try {

            const getItem = await Auth.findByIdAndUpdate(userId, {
                $pull: { items: { Object } }
            }, { new: true })

            res.status(201).json(getItem)

        } catch (error) {
            res.status(404).json({ message: message.error })
        }

    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {
    fetchingCartItemById,
    DeletingCartItemById,
    OrderingFullCartItem
}