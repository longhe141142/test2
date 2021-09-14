
const {handleError} = require('../Handling/Error/ErrorHandle')
const handleErr = (err,req,res,next) => {
    handleError(err,res)
}
module.exports = handleErr