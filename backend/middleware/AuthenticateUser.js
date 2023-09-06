const {sign,verify} = require('jsonwebtoken')
require('dotenv').config()
//Token creation
function tokenCreated(user) {
    return sign({
        emailAdress: user.emailAdress,
        userPwd: user.userPwd
    },process.env.SECRET_KEY,
    {
        expiresIn:'1h'
    })
}
//Token verification
function verifyToken(req,res,next) {
    const token = req.headers["authorization"]
    return verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if (err) {
            res.json({
                msg: "Token authontication failed."
            })
        }
        req.decoded =decoded
        next();
    })
}
module.exports = {
    tokenCreated,
    verifyToken
}





