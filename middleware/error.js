const handleError = (err, res, req, next) => {

    console.log(err.stack.red)
    res.status(500).json({
        success: false,
    error:error.msg})
}
module.exports = handleError;