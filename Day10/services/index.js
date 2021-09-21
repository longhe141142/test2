const db = require("../model/index");
let validate = require("../model/helper/schema.validate");
const { validateId } = require("../model/helper/schema.validate");
const { authSchema } = require("../helper/authen");
const handleErr = require("../middleware/err");
const { ErrorHandler } = require("../middleware/Error/ErrHandle");

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
    Active: async (id) => {
      let user = await db.user.findOne({ _id: id });

      if (user != null) {
        user.IsActive = 1;
      }
      return user instanceof Error || user == null
        ? false
        : user
            .save()
            .then((data) => data)
            .catch((err) => err);
    },
    InActive: async (id) => {
      let user = await db.user.findOne({ _id: id });
      if (user != null) {
        user.IsActive = 0;
      }
      return user instanceof Error || !user
        ? false
        : user
            .save()
            .then((data) => data)
            .catch((err) => err);
    },
    login: async (req, res, next) => {
      try {
        const result = await authSchema.validateAsync(req.body);
        console.log("rel", result);
        const user = await db.user.findOne({ Email: "longnt1@999.com" });

        console.log("user:", user);

        const isMatch = await user.isValidPassword(result.password);
        if (!isMatch)
          handleErr(
            new ErrorHandler(400, "Must Wrong password"),
            req,
            res,
            next
          );
        console.log("Map:", isMatch);
        res.send("Login success!");
      } catch (error) {
        if (error.isJoi === true) {
          console.log(error);
        }
        console.log(error);
        // return next(createError.BadRequest('Invalid Username/Password'))
        // next(error)
      }
    },
    getUserByPaging: async (_skip,_limit) =>{
       return await db.user.aggregate(
          [
            {
              '$skip': _skip
            }, {
              '$limit': _limit
            }
          ]
        )
    }
  },
  Order_Service: {
    add: async (obj) => {
      let { _id, Name, Description, Price, Tax, Phone, Discount } =
        obj;
      let user = new db.user({
        _id,
        Name,
        Description,
        Price,
        Tax,
        Phone,
        Discount,
        totalPrice,
        IsDeleted,
        CustomerId ,
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

  // Customer_Service: {
  //   addCustomer: async (obj) => {
  //     let { _id, UserId, PaymentMethod } = obj;
  //     let customer = new db.customer({
  //       _id,
  //       UserId,
  //       PaymentMethod,
  //       User: UserId
  //     });
  //     validateId(db.customer);
  //     return customer.save(err => {
  //       if(err){
  //         console.log("err save customer:",err)
  //       }
  //       let user = await db.user.findById(UserId);
  //       if(user == null){
  //          let user = new db.user({
  //           _id: UserId,
  //           UseName: "guess",
  //           Password:"123",
  //           Age: 0,
  //           Email:"",
  //           Phone:"",
  //           Address:"",
  //           IsActive:0,
  //          })
  //          user.save().then(data => {console.log(data)})
  //          .catch(err=>{console.log("err save user",err)})
  //          customer.IsActive = 0
  //          customer.save().then(data=>{console.log(data)}).catch(err=>{console.log(err)})
  //       }
  //     }).then(data=>data).catch(err => err)
  //   },
  // },
};

module.exports = service;
