const { ErrorHandler } = require("../Authenticate_User_App/Handling/Error/ErrorHandle")
const handleErr = require("../Authenticate_User_App/middleware/err.middleware")
const _Response_ = require("../Authenticate_User_App/middleware/response")
const _UsrServices_ = require("../Authenticate_User_App/service/UserService")

const _UsrControl_ = {
    authenticate:async (req,res,next) => {
        let { UseName,Pass } = req.body
        if(!UseName || !Pass){
            handleErr(new ErrorHandler(400,"You must enter password and useName"),req,res,next)
        }
        let process = await _UsrServices_.findUser(UseName,Pass).then(
            data=>data
        )
        console.log("proc:",process)

        if(!process){
            handleErr(new ErrorHandler(404,"User Not Found"),req,res,next)
        }else{
            // _Response_.SendStatus("err",res)
            _Response_.SendUser("err",res,process)
        }
    }
}

module.exports = _UsrControl_