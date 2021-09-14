require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const testAuthen = require("./database/model/testAuthenticate")
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

testAuthen()

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  res.json({ message: "Welcome to ... application." });
})

app.post("/", (req, res) => {

  res.json({ message: "Welcome to ... application." });
})


const PORT = 8082;

require("./Routes/F11_N12.user")(app)
app.listen(8802, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app