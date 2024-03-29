// const { USE } = require("sequelize/types/lib/index-hints");
const { USER } = require("../database/model/Object/user");
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should(),
     assert = chai.assert;
const mocha = require('mocha')
console.log("db model:", USER);

const findAllUsr = async () => {
  return await USER.findAll();
};

const CreateUsr = async (user_req) => {
  let data =  await USER.create({
    UserName: user_req.UseName,
    Password: user_req.Pass,
  });
  return data instanceof Error ? false : data 
};

const getUSR = async (id, ACTION) => {
//   console.log(ACTION);
  return ACTION === "GET ALL"
    ? await USER.findAll()
    : USER.findAll({
        where: {
          Id: id,
        },
      });
};

const ModifyUsr = async (id, ACTION) => {

  const data = ACTION === "DELETE"
    ? await USER.destroy({
        where: {
          Id: id,
        },
      })
    : ACTION === "ACTIVE"
    ? await USER.update(
        {
          IsActive: 1,
        },
        {
          where: {
            Id: id,
          },
        }
      )
    : ACTION === "INACTIVE"
    ? await USER.update(
        {
          IsActive: 0,
        },
        {
          where: {
            Id: id,
          },
        }
      )
    : await USER.update(
        {
          UseName: ACTION,
        },
        {
          where: {
            Id: id,
          },
        }
      );
      const user = USER.findOne({
          where:{
              Id: id
          }
      })
      return user
};

const getIdByUseName = async (_UseName) => {
      return await USER.findOne({
        where: {
          UserName : _UseName
        }
      })
}


module.exports = { findAllUsr, CreateUsr, getUSR, ModifyUsr,getIdByUseName };
