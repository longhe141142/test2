require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const testAuthen = require("./database/model/testAuthenticate")
require("./model/db.connection").connect()
const app = express();
const ApplyRouter = require("./Routes/user.route")

var corsOptions = {
  origin: "http://localhost:8081"
};

// testAuthen()

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to ... application." });
});

const PORT = process.env.PORT || 8082;

ApplyRouter(app)

// require("../Authenticate_User_App/router/order.router")(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});