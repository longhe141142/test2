// const services = require('../service/testService')
const createUser = require("../controller/user.controller").create
const getAllUsr = require("../controller/user.controller").getAllUsers
const getUserById = require("../controller/user.controller").getUserById
const updateUser = require("../controller/user.controller").UpdateUser
const ApplyRouter = (app) => {
    var router = require("express").Router();
    // router.get('/',services.homepage)
    router.post('/id',createUser)
    router.get('/id',getAllUsr)
    router.get('/:id',getUserById)
    router.post('/update',updateUser)
    app.use('/api/user',router)
}

module.exports = ApplyRouter