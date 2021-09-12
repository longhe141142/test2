// const db = require("../models"); // models path depend on your structure
// const Tutorial = db.tutorials;
const { ErrorHandler, handleError } = require("../helper/err");
const handleErr = require("../middlewaare/errHandle")
const User = require("./helper/Entity");
const {
  findAllUsr,
  CreateUsr,
  getUSR,
  ModifyUsr,
} = require("../service/User-service");
// const { ne } = require("sequelize/types/lib/operators");

exports.findAll = (req, res,next) => {
  try {
    getUSR("", "GET ALL").then((data) => res.send(data));
  } catch (err) {
    // console.log(err);
    // res.status(500).send({
    //   message: err.message || "Some error occurred while retrieving tutorials.",
    // });
    // next(err)
  }
};

exports.create = async (req, res,next) => {
  // Validate request
  if (!req.body.Pass) {
    handleErr(400,"Pass word may be null")
    return;
  }

  try {
    // Create a USER
    let User_req = new User(req.body.Id, req.body.UseName, req.body.Pass);
    let data = await CreateUsr(User_req);
    if(!data){
      handleErr(new ErrorHandler(400,"Can't create user!"),req,res,next)
      return
    }else{
      res.send(data)
    }
  } catch (err) {
    next(handleErr(new ErrorHandler(400,err),req,res,next));
  }
};

exports.getUsr =async (req, res, next) => {
  try {
    const id = req.query.id;
    console.log(id);
    if (!id) {
      handleErr(new ErrorHandler(404,"Not have param Id!"),req, res,next)
    }
    let data = await getUSR(id, "GET BY ID");
    if(!(!!data.length)){
      handleErr(new ErrorHandler(404,"User not found!"),req, res,next)
    }
    res.send(data)
  } catch (err) {
     handleErr(new ErrorHandler(404,err),req,res,next)
  }
};

exports.ActiveUsr = (req, res,next) => {
  try {
    let { Id } = req.body;
    if(!Id){
      handleErr(new ErrorHandler(404,"Id may be null!"),req,res,next)
      return
    }
    ModifyUsr(Id, "ACTIVE").then((data) => res.send(data));
  } catch (err) {
      next(handleErr(new ErrorHandler(500,err),req,res,next));
  }
};
