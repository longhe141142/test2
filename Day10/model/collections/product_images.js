module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        _id: String,
        Name: String,
        Product: String,
        Url: String,
        Product: {
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
    const product_images = mongoose.model("product_images", schema,"product_images");
  
    return product_images;
  };
  