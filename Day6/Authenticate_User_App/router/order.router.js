// const services = require('../service/testService')

const _OdControl_ = require("../../controller/OrderControl");

module.exports = (app) => {
    var router = require("express").Router();
    // router.get('/',services.homepage)
    router.post('/id',_OdControl_.deleteOd)
    app.use('/api/order',router)
}

