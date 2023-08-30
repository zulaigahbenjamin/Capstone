const {sign, verify} = require('jsonwebtoken')
require("dotenv").config()

import jwt from 'jsonwebtoken';

const payload = { userId: 123 };
const secretKey = 'zulaigah';

const token = jwt.sign(payload, secretKey);
function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '3h'
    })
}
module.exports = {
    createToken
}