const { ErrorHandler } = require("../Authenticate_User_App/Handling/Error/ErrorHandle")
const handleErr = require("../Authenticate_User_App/middleware/err.middleware")

const _UsrControl_ = {
    authenticate: (err,req,res,next) => {
        let { UseName,Pass } = req.body
        if(!UseName || !Pass){
            handleErr(new ErrorHandler(400,"You must enter password and useName"),res)
        }
    }
}