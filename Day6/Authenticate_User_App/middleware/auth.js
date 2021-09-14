const dotenv = require('dotenv');
dotenv.config();
var jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  const token =
    req.body.token ;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
    const decoded = jwt.verify(token, "process.env.TOKEN");
    console.log("decoded",decoded)
    req.user = decoded;
    res.status(200).send(decoded)
};

module.exports = verifyToken;