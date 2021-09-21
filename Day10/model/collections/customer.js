module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        UserId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        },
        PaymentMethod: Boolean,
        IsActive: Number,
      },
      { timestamps: { createdAt: "created_at", UpdateAt: "update_at" } }
    );
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const customer = mongoose.model("customer", schema,"customer");
    return customer;
  };
  