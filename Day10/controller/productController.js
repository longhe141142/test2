const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const service = require("../services/index");
const _Response_ = require("../middleware/response");


exports.add = async (req, res,next) => {
     const images = req.files
    // images.map(val=>{console.log(val.filename)})
     console.log(images)
     console.log(req.body)
    //  const obj = {
    //     Name: req.Name,

    //  }
     let log = await service.ProductService.createProduct(req.body,images)
     if(log!=null && !(log instanceof Error)){
         _Response_.SendStatus_WithMessage(res,200,log)
     }else{
         console.log(log)
         handleErr(new ErrorHandler(404,"cant create"), req, res, next)
     }

}


exports.update = async (req, res, next) => {
    const images = req.files
    // images.map(val=>{console.log(val.filename)})
     console.log(images)
     console.log(req.body)
    //  const obj = {
    //     Name: req.Name,

    //  }
    let id = req.params.id
    console.log(id)
     let log = await service.ProductService.updateProduct(id,req.body,images)
     if(log!=null && !(log instanceof Error)){
         _Response_.SendStatus_WithMessage(res,200,log)
     }else{
         console.log(log)
         handleErr(new ErrorHandler(404,"cant create"), req, res, next)
     }
}

exports.getList = async (req, res, next) => {
    let page = req.params.page
    let limit = 4
    let skip = (page-1) * limit
    let data = await service.ProductService.getList(skip, limit)
    console.log(data)
    if(data!=null && !(data instanceof Error))
    _Response_.SendStatus_WithMessage(res,200,data)
    else{
      handleErr(new ErrorHandler(400,"cant retrieve data or data null"), req, res, next)
    }
}