const db = require("../model/index");
let validate = require("../model/helper/schema.validate");
const { validateId } = require("../model/helper/schema.validate");
const { authSchema } = require("../helper/authen");
const handleErr = require("../middleware/err");
const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const { ObjectId } = require("mongodb");
const { mkdirSync, deleFIle } = require("../helper/file_interact");

const service = {
  user_service: {
    getAllUser: async () => {
      return await db.user.find();
    },
    createUser: async (obj) => {
      try {
        const session = await db.mongoose.startSession();
        await session.withTransaction(async () => {
          // console.log("errx998")
          // create user.
          const { customer, mail, ...dataOmit } = obj;

          const User = await db.user.create([dataOmit], { session });

          // create customer
          const Customer = await db.customer.create(
            [
              {
                ...customer,
                UserId: User[0]._id,
              },
            ],
            { session }
          );

          data = {
            User: User[0],
            Customer: Customer[0],
          };
          console.log("data", data);
        });

        session.endSession();
        return data || new Error();
      } catch (err) {
        console.log(err);
        return err;
      }
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
      let data;
      try {
        const session = await db.mongoose.startSession();
        await session.withTransaction(async () => {
          const [user, customer] = await Promise.all([
            db.user.findOne({ _id: id }),
            db.customer.findOne({ UserId: id }),
          ]);
          user.set({
            IsActive: 1,
          });
          await user.save({ session });

          customer.set({
            IsActive: 1,
          });
          await customer.save({ session });

          data = {
            user,
            customer,
          };
        });
        session.endSession();
        return data || new Error();
      } catch (err) {
        return err;
      }
    },
    InActive: async (id) => {
      let data;
      try {
        console.log("crash here");
        const session = await db.mongoose.startSession();
        await session.withTransaction(async () => {
          const [user, customer] = await Promise.all([
            db.user.findOne({ _id: id }),
            db.customer.findOne({ UserId: id }),
          ]);
          user.set({
            IsActive: 0,
          });
          await user.save({ session });

          customer.set({
            IsActive: 0,
          });
          await customer.save({ session });

          data = {
            user,
            customer,
          };
          console.log(data);
        });
        session.endSession();
        return data || new Error();
      } catch (err) {
        console.log(err);
        return err;
      }
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
    getUserByPaging: async (_skip, _limit) => {
      return await db.user.aggregate([
        {
          $skip: _skip,
        },
        {
          $limit: _limit,
        },
      ]);
    },
  },
  Order_Service: {
    add: async (obj) => {
      console.log("go here");

      let data = {
        message: obj.list.length > 0 ? "Accept" : "Reject",
      };
      try {
        const session = await db.mongoose.startSession();
        await session.withTransaction(async () => {
          const { list, ...order } = obj;
          // console.log(order,list)
          const Order = await db.order.create(
            [
              {
                ...order,
                Tax:
                  list
                    .map((detail) => {
                      // console.log("testing:",detail.order_details.Tax)
                      return detail.order_details.Tax;
                    })
                    .reduce((acc, curr) => {
                      // console.log("testing:",acc,curr)

                      return acc + curr;
                    }) / list.length,
                Discount:
                  list
                    .map((detail) => {
                      return detail.order_details.Discount;
                    })
                    .reduce((acc, curr) => {
                      return acc + curr;
                    }) / list.length,
                Price:
                  list
                    .map((detail) => {
                      return detail.order_details.Discount;
                    })
                    .reduce((acc, curr) => {
                      return acc + curr;
                    }) / list.length,
              },
            ],
            { session }
          );
          console.log(Order[0]._id);
          for (const val of list) {
            val.order_details.OrderId = Order[0]._id;
            val.order_details.Phone = Order[0].Phone;
          }
          // console.log(order_details[0].OrderId)
          // const Order_details = await db.order_details.create([...list], {
          //   session,
          // });
          const Order_details = await db.order_details.create(
            list.map((val) => {
              // console.log("Error 404:",val.order_details)
              return val.order_details;
            }),
            {
              session,
            }
          );

          Order[0].set({
            totalPrice: Order_details.map((val) => val.totalPrice).reduce(
              (acc, curr) => acc + curr
            ),
          });
          await Order[0].save({ session });

          data.data = {
            order: Order,
            order_details: Order_details,
          };

          console.log("total:", Order[0].totalPrice);

          // console.log(data.data)
        });
        await session.endSession();
        return data.data || new Error("Error");
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    getCus: async (orderid) => {
      return await db.order
        .aggregate(
          [
            {
              $lookup: {
                from: "customer",
                localField: "CustomerId",
                foreignField: "_id",
                as: "customer",
              },
            },
            {
              $match: {
                _id: new ObjectId(orderid),
              },
            },
          ],
          "adminID roomID roomName users"
        )
        .then((data) => data[0].customer[0])
        .catch((err) => err);
    },
    getEmailCus: async (orderid) => {
      return await db.order
        .aggregate([
          {
            $lookup: {
              from: "customer",
              localField: "CustomerId",
              foreignField: "_id",
              as: "customer",
            },
          },
          {
            $match: {
              _id: new ObjectId(orderid),
            },
          },
          {
            $lookup: {
              from: "user",
              localField: "customer.UserId",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $group: {
              _id: {
                email: "$user.Email",
              },
              fieldN: {
                $addToSet: "$customer",
              },
            },
          },
        ])
        .then((data) => data[0]._id.email[0]);
    },
    paging: async (_skip, _limit) => {
      return await db.order.aggregate([
        {
          $lookup: {
            from: "order_details",
            localField: "_id",
            foreignField: "OrderId",
            as: "order_details",
          },
        },
        {
          $skip: _skip,
        },
        {
          $limit: _limit,
        },
      ]);
    },
    delete: async (order_id) => {
      const session = await db.mongoose.startSession();
      let log;
      try {
        await session.withTransaction(async () => {
          let order = await db.order.findById(order_id);
          order.set({
            IsDeleted: 1,
          });
          await order.save({ session });
          await db.order_details.deleteMany({ OrderId: order_id }, { session });
          log = order;
        });
        session.endSession();
        return log;
      } catch (err) {
        return err;
      }
    },
  },
  ProductService: {
    createProduct: async (obj, images) => {
      let data = {};
      console.log(images);
      try {
        let session = await db.mongoose.startSession();
        await session.withTransaction(async () => {
          let product = await db.product.create([obj], { session });
          let PRODUCT_IMAGES = [];
          images.map((acc, curr) => {
            PRODUCT_IMAGES.push({
              ProductId: product[0]._id,
              Name: curr.filename,
              Url: curr.path,
            });
          });

          let productimages = await db.product_images.create(
            [...PRODUCT_IMAGES],
            { session }
          );
          data.product = product[0];
          data.product_images = productimages;
        });
        session.endSession();
        return data || new Error("failed!");
      } catch (error) {
        return error;
      }
    },
    updateProduct: async (id, obj, images) => {
      let data = {};

      try {
        let session = await db.mongoose.startSession();
        await session.withTransaction(async () => {
          console.log("Dasasd");

          let [product] = await Promise.all([
            await db.product.findOne({ _id: id }),
          ]);

          product.set(obj);
          await product.save({ session });

          data.product = product;
          console.log("product", product);
          if (!images) {
            db.product_images.deleteMany(
              {
                ProductId: id,
              },
              { session }
            );
            let PRODUCT_IMAGES = [];
            images.map((acc, curr) => {
              PRODUCT_IMAGES.push({
                ProductId: product[0]._id,
                Name: curr.filename,
                Url: curr.path,
              });
            });

            let productimages = await db.product_images.create(
              [...PRODUCT_IMAGES],
              { session }
            );
            data.product_images = productimages;
          }
        });

        session.endSession();
        return data || new Error("Failed");
      } catch (error) {
        return error;
      }
    },
    getList: async (_skip, _limit) => {
      return await db.product.aggregate([
        {
          $lookup: {
            from: "product_images",
            localField: "_id",
            foreignField: "ProductId",
            as: "product_images",
          },
        },
        {
          $skip: _skip,
        },
        {
          $limit: _limit,
        },
      ]);
    },
  },
};

module.exports = service;
