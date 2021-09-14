
const { database } = require('../model')
const  { USER } = require('../model/Object/USER')
const _UsrServices_ = {
     
    findUser: async (useName,pass) =>{
       return __self.findIdByUseName(useName) instanceof Error
       ? false : await USER.findOne({
           where: {
               Id : await __self.findIdByUseName(useName).then(data=>data),
               PassWord : pass 
           }
       })
    },

    findIdByUseName: async (userName) =>{
     return  await USER.findOne({
          where: { UserName: userName }
      }).then(
           data => { return data.Id }
      )
      .catch(err=>err)
    }
}
let __self = _UsrServices_

// async function test() {
//     let id = await _UsrServices_.findIdByUseName("lodng")
//     console.log(id)
//     console.log("id222",id)
//     if(id instanceof Error){
//         console.log("0x745DA4F")
//     }
// }

// test()

// _UsrServices_.findUser("long").then(
//     data => {console.log(data)}
// )

module.exports = _UsrServices_