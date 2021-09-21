const createCustomer = require("../controller/customer.controller").create
const ApplyCusRouter = (app) => {
    var router = require("express").Router();
    // router.get('/',services.homepage)
   router.post('/id',createCustomer)
   app.use('/api/customer',router)
}

module.exports = ApplyCusRouter