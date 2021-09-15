const { ErrorHandler } = require("../Authenticate_User_App/Handling/Error/ErrorHandle")
const handleErr = require("../Authenticate_User_App/middleware/err.middleware")
const _Response_ = require("../Authenticate_User_App/middleware/response")
const _OrderService_ = require("../Authenticate_User_App/service/OrderServices")


const _OdControl_ = {
    deleteOd:async (req,res,next) => {
          let {OdId} = req.body
          if(!OdId){
            handleErr(new ErrorHandler(404,"Must Take Order Id!"),req,res,next)
          }

          let process = await _OrderService_.DeleteOrderById(OdId)
          if(!(process) instanceof Error && process){
            _Response_.SendStatus(err,res);
          }else{
            handleErr(new ErrorHandler(404,"DELETE FAILED!"),req,res,next)
          }
    }
}

module.exports = _OdControl_