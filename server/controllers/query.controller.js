const Query = require("../modal/querySchema")

const QueryPost = async (req, res) => {
    const { ques } = req.body
    if (!ques) return res.status(404).json({ message: "Question is required." })


    try {
        const newQues = new Query({
            ques:ques
        })

       await newQues.save()
        res.status(201).json(newQues)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = QueryPost
