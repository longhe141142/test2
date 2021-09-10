module.exports = app => {
    const User = require("../controller/user.controller")
    var router = require("express").Router();
    router.get("/", User.findAll);
    app.use('/api/user', router);
}