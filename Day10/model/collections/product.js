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
        IsDeleted: Number
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
        console.log("total:",this.totalPrice)
        this.IsDeleted = 0
        next();
      } catch (error) {
        next(error);
      }
    });
    
    const product = mongoose.model("product", schema,"product");
  
    return product;
  };
  