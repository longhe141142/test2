const { USER } = require("../database/model/Object/user");

console.log("db model:", USER);

const findAllUsr = async () => {
  return await USER.findAll();
};

const CreateUsr = async (user_req) => {
  return await USER.create({
    UserName: user_req.UseName,
    Password: user_req.Pass,
  });
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

module.exports = { findAllUsr, CreateUsr, getUSR, ModifyUsr };
