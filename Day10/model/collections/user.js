const bcrypt = require('bcrypt');

module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      UseName: {
        type: String,
        immutable: true,
      },
      Password: String,
      Age: Number,
      Email: {
        type: String,
        immutable: true,
      },
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

  schema.pre("save", async function (next) {
    try {
      /* 
      Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
      */
      if (this.isNew) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.Password, salt);
        this.Password = hashedPassword;
        console.log("dsad")
      }
      next();
    } catch (error) {
      next(error);
    }
  });

  schema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.Password);
    } catch (error) {
      throw error;
    }
  };
  const user = mongoose.model("user", schema, "user");

  return user;
};
