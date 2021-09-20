module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        _id: String,
        OrderId: String,
        ProductId: String,
        Price: Number,
        Tax: Number,
        Phone: String,
        Discount: Number,
        totalPrice: Number,
        IsDeleted: Number,
        Order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
          },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
          },
      },
      { timestamps: { createdAt: "created_at", UpdateAt: "update_at" } }
    );
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const order_details = mongoose.model("order_details", schema,"order_details");
  
    return order_details;
  };
  