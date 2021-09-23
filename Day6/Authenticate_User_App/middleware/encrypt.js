const dotenv = require('dotenv');
dotenv.config();
var jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    console.log("user",user)
    // return jwt.sign(JSON.stringify(user), process.env.TOKEN, { algorithm: 'RS256'});
 return   jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (6000 * 60),
        data: user,
        // algorithm: 'RS256'
      }, process.env.TOKEN)
}

module.exports = (req,res,User,process) => {
    User.token = generateAccessToken(process)
    // console.log("dshdad",token)
    res.status(200).send(
        JSON.stringify({
            User,
        })
    )
}

// jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (6000 * 60),
//     data: {usename,password},
//     // algorithm: 'RS256'
//   }, process.env.TOKEN)
