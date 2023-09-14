const { sign, verify } = require('jsonwebtoken')
require("dotenv").config()
function tokenCreated(user) {
    return sign({
        emailAddress: user.emailAddress,
        userPwd: user.userPwd
    },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h'
        })
}

function verifyToken(token) {
    try {
        const decoded = verify(token, process.env.SECRET_KEY);
        return decoded;
    }
    catch (err) {
        return null;
    }
}
module.exports = {
    tokenCreated,
    verifyToken
}