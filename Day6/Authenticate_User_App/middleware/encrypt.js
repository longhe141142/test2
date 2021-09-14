const dotenv = require('dotenv');
dotenv.config();
var jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.TOKEN, { expiresIn: '1800s' });
}

module.exports = (req,res,User) => {
    User.token = generateAccessToken(User)
    res.status(200).send(
        JSON.stringify({
          User
        })
    )
}