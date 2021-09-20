// const services = require('../service/testService')
const createUser = require("../controller/user.controller").create
const getAllUsr = require("../controller/user.controller").getAllUsers
const ApplyRouter = (app) => {
    var router = require("express").Router();
    // router.get('/',services.homepage)
    router.post('/id',createUser)
    router.get('/id',getAllUsr)
    app.use('/api/user',router)
}

module.exports = ApplyRouter