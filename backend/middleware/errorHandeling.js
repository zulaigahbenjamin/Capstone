export function errorHandeling(err, req, res, next) {
    if (err) {
        const status = err.status || 501;

        res.status(status).json({
            status: status,
            err: "An error has occurred, try again later"
        });
    }
    next();
}
