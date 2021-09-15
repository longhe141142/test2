const db = require("../model/index");
const USERR = db.USER;
db.connect();

const services = {
  _Usr_Service_: {
    getAllUser: () => {
      db.USER.find({})
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("err:", err);
        });
    },
    addUser: (user) => {
      let { Id, Pass, UseName } = user;
      return new db.USER({
        _id: Id,
        Pass: Pass,
        UseName: UseName,
      }).save()
      .then(
          () => {return `Id: ${Id} successfully added!`}
      ).catch(err=>err)
    },
    deleteUser: (id) => {
     return db.USER.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          return "Not found Id"
        } else {
          return "Delete successfully"
        }
      })
      .catch(err => {
        console.log(err)
         return "Something crashed"
      });
    },
    updateUserPass: (filter,update) => {
      return db.USER.findOneAndUpdate(filter,update)
      .then(data=>{
        if(!data){
          return "Not found USER"
        }
        return `UPDATE SUCCESSFULLY!`
      }).catch(err => {
        console.log(err)
         return "Something crashed"
      });
    }
  },
};

module.exports = services

services._Usr_Service_.getAllUser();

// services._Usr_Service_.addUser({
//     Id:"13swdssdss4",
//     UseName:"he141142",
//     Pass:"1234"
// }).then(data => {console.log(data)})

// const test = async()=>{
//   let message = await services._Usr_Service_.deleteUser("13swdssdss4");
//   let message = await services._Usr_Service_.updateUserPass({_id:"13wdssdss4"},{Pass:"1998"})
//   console.log("message:",message)

// }
// test()