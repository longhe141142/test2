const {
    ErrorHandler,
    handleError
  } = require("../helper/err")

const handleErr = (err,req,res,next) => {
    handleError(err,res)
    // res.next(err)
    // console.log("ERRHE141142:",next)
}

module.exports = handleErr