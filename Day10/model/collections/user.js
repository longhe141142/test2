module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
      UseName: String,
      Password: String,
      Age: Number,
      Email: String,
      Phone: String,
      Address: String,
      IsActive: Number,
    },
    { timestamps: { createdAt: "created_at", UpdateAt: "update_at" } }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const user = mongoose.model("user", schema,"user");

  return user;
};
