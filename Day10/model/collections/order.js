module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      Name: String,
      Description: String,
      Price: Number,
      Tax: Number,
      Phone: String,
      Discount: Number,
      totalPrice: Number,
      IsDeleted: Number,
      CustomerId: {
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



  const order = mongoose.model("order", schema, "order");

  return order;
};
