const  { USER }  = require("../database/model/Object/user")

console.log("db model:",USER)

const findAllUsr = async () =>{
    return await USER.findAll();
} 

const CreateUsr = async (user_req) =>{
    return await USER.create({ Id: user_req.Id, UserName: user_req.UseName,Password:user_req.Pass });
}

const getUSR = async (id,ACTION) =>{
    console.log(ACTION)
    return ACTION === "GET ALL" ? await USER.findAll()
    : USER.findAll({
        where: {
            Id: id
        }
    })
}

const ModifyUsr = async (id,ACTION) => {
    return ACTION === "DELETE" ? 
           await USER.destroy({
            where: {
                Id: id
              }
           })
           : await USER.update({
               UseName: ACTION
           },{
               where: {
                   Id: id
               }
           })
}
module.exports = { findAllUsr,CreateUsr,getUSR }
