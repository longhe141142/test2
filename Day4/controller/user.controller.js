// const db = require("../models"); // models path depend on your structure
// const Tutorial = db.tutorials;
const User = require("./helper/Entity")
const  { findAllUsr, CreateUsr, getUSR, ModifyUsr } = require("../service/User-service");

exports.findAll = (req, res) => {

  try {
    
    getUSR("","GET ALL").then((data) => res.send(data));
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials.",
    });
  }
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.Pass) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  try {
    // Create a USER
    let User_req = new User(
      req.body.Id,
      req.body.UseName,
      req.body.Pass
    );
    CreateUsr(User_req).then((data) => res.send(data));
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

exports.getUsr = (req, res) => {
  const id = req.query.id;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  console.log(id)
  try {
    getUSR(id,"GET BY ID").then((data) => res.send(data));
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials.",
    });
  }
};

exports.ActiveUsr = (req,res) => {
  const id = req.body.Id
  if (!req.body.Id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  try {
    // Create a USER
    let User_req = new User(
      req.body.Id,
      req.body.UseName,
      req.body.Pass
    );
    ModifyUsr(id,"ACTIVE").then((data) => res.send(data));
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });
  }
}
