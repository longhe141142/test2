const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.URI;
// db.tutorials = require("./tutorial.model.js")(mongoose);
db.USER = require("./Object/User.model")(db.mongoose);
db.CUSTOMER = require("./Object/Customer.model")(db.mongoose);
db.connect = async () => {
  await require("./db.connection")().then(
      console.log("SUCCESS!")
  ).catch(
      err => {console.log(err)}
  )
   
};

module.exports = db;
