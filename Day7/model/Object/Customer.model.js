module.exports = mongoose => {

    //one to one 
    var schema = mongoose.Schema(
        {
          _id: String,
          User_id: String,
          UseName: String,
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "USER"
          }
        },
        { timestamps: true }
      )

      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });

    const CUSTOMER = mongoose.model(
      "CUSTOMER",
      schema
    );
    return CUSTOMER;
  };