const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const service = require("../services/index");
const _Response_ = require("../middleware/response");
const sendMail = require("../middleware/sendEmail");



exports.create = async (req, res, next) => {
   let log = await service.Order_Service.add(req.body)
//  let rel = await  service.Order_Service.getCus("614a9b5e0aac207a24b86122")
//  console.log(JSON.stringify(rel))
   
   if(log!=null && !(log instanceof Error)){
    //  sendMail(req,res,next, mail)
    // service.Order_Service.getCus("614a97a0a7a46e67f66acf19")
    // console.log("log",log)
    // let customerInfo = await service.Order_Service.getCus(log.order[0].CustomerId)
    // console.log("customerInfo::::",customerInfo)
    let email = await service.Order_Service.getEmailCus(log.order[0]._id)
    //  console.log("email>>>",email)
    sendMail(req,res,next, email)
   }else{
     handleErr(new ErrorHandler(400,"Email have not sent yet!,Failed to create order"),req, res, next)
   }
  };


  exports.getList = async (req, res, next) => {
    console.log(req.params.page)
    let page = req.params.page
    let limit = 4
    let skip = (page-1) * limit
    let data = await service.Order_Service.paging(skip, limit)
    console.log(data)
    if(data!=null && !(data instanceof Error))
    _Response_.SendStatus_WithMessage(res,200,data)
    else{
      handleErr(new ErrorHandler(400,"cant retrieve data or data null"), req, res, next)
    }
  }

  exports.delete =async (req, res, next) => {
     let id = req.body._id
     let log = await service.Order_Service.delete(id)
     console.log(log)
     if(!(log instanceof Error)){
       _Response_.SendStatus_WithMessage(res,200,log)
     }else{
      handleErr(new ErrorHandler(400,"cant delete"), req, res, next)

     }
  }