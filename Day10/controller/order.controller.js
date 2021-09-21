const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const service = require("../services/index");
const _Response_ = require("../middleware/response");



exports.create = async (req, res, next) => {
    // Validate request
    service.Order_Service.add(req.body)
   
  };