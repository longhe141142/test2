 const services = require('../service/mainservice')

const ApplyRouter = (app) => {
    var router = require("express").Router();
    router.get('/',services.homepage)
    app.use('/',services.homepage)
}

module.exports = ApplyRouter