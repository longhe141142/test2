const  { USER }  = require("../database/model/Object/user")

console.log("db model:",USER)

const findAllUsr = async () =>{
    return await USER.findAll();
} 

module.exports = findAllUsr
