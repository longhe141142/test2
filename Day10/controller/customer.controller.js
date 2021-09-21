const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const service = require("../services/index");
const _Response_ = require("../middleware/response");

exports.create = async (req, res, next) => {
  let { _id, UserId, PaymentMethod } = req.body;
  if(!!_id && !!UserId && !!PaymentMethod ){
      handleErr(new ErrorHandler(400,"Err: Can't create and active"))
  }
  let cus = await service.Customer_Service.addCustomer(req.body)
  res.send(cus)

};
