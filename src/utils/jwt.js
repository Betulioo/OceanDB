const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "kmcdolfsohs");
}

const generateToken = (id, email, role, collection, username) => {
    return jwt.sign({ id, email, role, collection, username }, "kmcdolfsohs", { expiresIn: '3h' })
}



module.exports = { generateToken, verifyToken }