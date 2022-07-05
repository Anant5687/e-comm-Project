const jwt = require('jsonwebtoken')
const { errorCheck } = require('./errorCheck')

const verifyToken = (req, res, next) => {
    const token = req.cookies.accesstoken
    if (!token) {
        return next(errorCheck(404, "you are not authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return next(errorCheck(400, "Token is not valid"))
        }
        else {
            req.user = user
            next()
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        }
        else {
            return next(errorCheck(404, "You are not authorized"))
        }
    })
}

module.exports = {
    verifyToken,
    verifyAdmin
}