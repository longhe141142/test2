const { USER } = require("../database/model/Object/user");

module.exports = app => {
    const User = require("../controller/user.controller")
    var router = require("express").Router();
    router.get("/", User.findAll);
    router.get("/:id",User.getUsr)
    router.post("/",User.create)
    router.patch("/:id/active",User.ActiveUsr)
    app.use('/api/user', router);
}




