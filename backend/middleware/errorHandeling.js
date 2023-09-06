function errorHandling(err,res,next) {
    if(err){
        let status = err.status || 500
        res.json({
            status,
            msg: "An error has occured, please try again later"
        })
    }
    next()
}

module.exports = errorHandling