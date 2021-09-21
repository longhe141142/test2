const order_controller = require('../controller/order.controller')
const createOrder = order_controller.create

const ApplyOrderRouter = (app) => {
  var router = require("express").Router();
  // router.get('/',services.homepage)
  router.post("/create", createOrder);
 
  app.use("/api/order", router);
};

module.exports = ApplyOrderRouter;
