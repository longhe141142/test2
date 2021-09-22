const { uploadSingle, UploadMultil } = require("../helper/upload_image");
const createProduct = require("../controller/productController").add
const updatepro = require("../controller/productController").update
const paging = require("../controller/productController").getList
const ApplyProductRouter = (app) => {
    var router = require("express").Router();
    // router.get('/',services.homepage)
    router.post('/uploadImages',UploadMultil,createProduct)
    router.patch('/update/:id',UploadMultil,updatepro)
    router.get('/page/:page',paging)
    app.use("/api/product", router);
    
  };
  
  module.exports = ApplyProductRouter;

