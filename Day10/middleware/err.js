const {handleError} = require('./Error/ErrHandle')
const handleErr = (err,req,res,next) => {
    handleError(err,res)
}

module.exports = handleErr
