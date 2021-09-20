const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dbConfig = require("./config/db.config")
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.tutorials = require("./tutorial.model.js")(mongoose);
db.user = require("./collections/user")(mongoose)
db.customer = require("./collections/customer")(mongoose)
db.order = require("./collections/order")(mongoose)
db.order_details = require("./collections/order_details")(mongoose)
db.product = require("./collections/product")(mongoose)
db.product_images = require("./collections/product_images")(mongoose)

module.exports = db