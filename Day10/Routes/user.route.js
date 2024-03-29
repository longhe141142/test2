// const services = require('../service/testService')
const createUser = require("../controller/user.controller").create;
const getAllUsr = require("../controller/user.controller").getAllUsers;
const getUserById = require("../controller/user.controller").getUserById;
const updateUser = require("../controller/user.controller").UpdateUser;
const active = require("../controller/user.controller").ActiveUser;
const inactive = require("../controller/user.controller").InActiveUser;
// const sendMail = require("../controller/user.controller").sendMail; //v1.0
const login = require("../controller/user.controller").login;
const paging = require("../controller/user.controller").paging;
const ApplyRouter = (app) => {
  var router = require("express").Router();
  // router.get('/',services.homepage)
  router.get("/paging/:page", paging);
  // router.post("/id", createUser, sendMail); //v1.0
  router.post("/id", createUser); //v1.1
  router.get("/id", getAllUsr);
  router.get("/:id", getUserById);
  router.patch("/update", updateUser);
  router.patch("/active/:id", active);
  router.patch("/inactive/:id", inactive);
  router.post("/login", login);
  app.use("/api/user", router);
};

module.exports = ApplyRouter;
