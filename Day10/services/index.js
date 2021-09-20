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
    getUserById: async (id) => {
      return await db.user.findById(id);
    },
    UpdateUser: async (id, data) => {
      //way1:
      // console.log("turn in:",id)
      // let user = await db.user.findOne({_id:id})
      // if(user instanceof Error || !user){
      //   console.log("Errorx86:",user)
      //   return false;
      // }else{
      //   user.overwrite(data)
      //   return await user.save()
      // }
      // way2:
      // return await db.user.replaceOne({ id }, data);
      //way3
      return await db.user.updateOne(
        {
          _id: id,
        },
        data,
        { upsert: true }
      );
    },
  },
};

module.exports = service;
