const order_controller = require('../controller/order.controller')
const createOrder = order_controller.create
const paging = order_controller.getList
const deleteOrder = order_controller.delete
const ApplyOrderRouter = (app) => {
  var router = require("express").Router();
  // router.get('/',services.homepage)
  router.post("/create", createOrder);
  router.get('/paging/:page',paging)
  router.delete('/delete',deleteOrder)
  app.use("/api/order", router);
  
};

module.exports = ApplyOrderRouter;
