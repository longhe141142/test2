module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
      ProductId: String,
      Price: Number,
      Tax: Number,
      Phone: String,
      Discount: Number,
      totalPrice: Number,
      IsDeleted: Number,
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    },
    { timestamps: { createdAt: "created_at", UpdateAt: "update_at" } }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.pre("save", async function (next) {
    try {
      let { Price,Tax,Discount } = this
      this.totalPrice = (Price - (Price*Discount/100) )*(1+Tax/100)
      console.log("total:",this.totalPrice)
      this.IsDeleted = 0
      next();
    } catch (error) {
      next(error);
    }
  });

  const order_details = mongoose.model(
    "order_details",
    schema,
    "order_details"
  );


  return order_details;
};
