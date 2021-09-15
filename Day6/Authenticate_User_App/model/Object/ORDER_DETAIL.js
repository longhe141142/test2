const db = require("../index")


const ORDER_DETAIL = db.database.define("ORDER_DETAIL",{
    Id: {
        type: db.Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true,
    },
    OrderId: {
        type: db.Sequelize.STRING(36),
        allowNull: false,
    },
    ProductId: {
        type: db.Sequelize.STRING(36),
        allowNull: false,
    }
},
{freezeTableName: true,
  timestamps : true,
  createdAt: false,
  updatedAt: false,})


module.exports = { ORDER_DETAIL }