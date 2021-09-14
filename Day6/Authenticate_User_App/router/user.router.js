 const _UsrControl_ = require('../../controller/Authentication');
// const services = require('../service/testService')

const ApplyRouter = (app) => {
    var router = require("express").Router();
    // router.get('/',services.homepage)
    router.post('/id',_UsrControl_.authenticate)
    router.get('/id',_UsrControl_.decoding)
    app.use('/api/user',router)
}

module.exports = ApplyRouter