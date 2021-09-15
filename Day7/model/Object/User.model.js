module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
      Pass: String,
      UseName: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const USER = mongoose.model("USER", schema);
  return USER;
};

