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
        IsDeleted: Number
      },
      { timestamps: { createdAt: "created_at", UpdateAt: "update_at" } }
    );
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const product = mongoose.model("product", schema,"product");
  
    return product;
  };
  