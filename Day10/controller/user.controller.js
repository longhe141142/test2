const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const service = require("../services/index");
exports.create = async (req, res, next) => {
  // Validate request
  if (!req.body.UseName) {
    handleErr(
      new ErrorHandler(400, "You must fill in UseName"),
      req,
      res,
      next
    );
    return;
  }

  try {
    // Create a USER
    let data = await service.user_service.createUser(req.body);
    console.log(data)
    if (!data) {
      handleErr(new ErrorHandler(400, "Can't create user!"), req, res, next);
      return;
    } 
    else if(data instanceof Error){
      handleErr(new ErrorHandler(400, "Can't create user!"), req, res, next);
      return;    }
    else{
      res.send(data);
     
    }
  } catch (err) {
    console.log(err)
    next(handleErr(new ErrorHandler(400, "error"), req, res, next));
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    let users = await service.user_service.getAllUser();
    res.send(users);
  } catch (err) {
    handleErr(new ErrorHandler(404, err), req, res, next);
  }
};
