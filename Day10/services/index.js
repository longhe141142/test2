const db = require("../model/index");
let validate = require("../model/helper/schema.validate");
const { validateId } = require("../model/helper/schema.validate");
const service = {
  user_service: {
    getAllUser: async () => {
      return await db.user.find();
    },
    createUser: async (obj) => {
      let { _id, UseName, Password, Age, Email, Phone, Address, IsActive } =
        obj;
      let user = new db.user({
        _id,
        UseName,
        Password,
        Age,
        Email,
        Phone,
        Address,
        IsActive,
      });
      validateId(db.user);
      return await user
        .save()
        .then((data) => {
          console.log("datax64:", data);
          return true;
        })
        .catch((err) => {
          console.log("errx64:", err);
          return false;
        });
    },
  },
};

module.exports = service;
