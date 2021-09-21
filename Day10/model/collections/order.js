module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
      Name: String,
      Description: String,
      Price: Number,
      Tax: Number,
      Phone: String,
      Discount: Number,
      totalPrice: Number,
      IsDeleted: Number,
      CustomerId: String,
      customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
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
      console.log(this.totalPrice)
      next();
    } catch (error) {
      next(error);
    }
  });

  const order = mongoose.model("order", schema, "order");

  return order;
};
