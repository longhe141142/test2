const db = require("../index")


const ORDER = db.database.define("ORDER",{
    Id: {
        type: db.Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true,
    },
    CustomerId: {
        type: db.Sequelize.STRING(36),
        allowNull: false,
    },
    Price: {
        type: db.Sequelize.DOUBLE(12,2),
        allowNull: false,
    },
    Tax: {
        type: db.Sequelize.DOUBLE(12,2),
        allowNull: true,
    },
    Phone: {
        type: db.Sequelize.STRING(20),
        allowNull: true,
    },
    discount: {
        type: db.Sequelize.DOUBLE(12,2),
        allowNull: true,
    }
},
{freezeTableName: true,
  timestamps : true,
  createdAt: false,
  updatedAt: false,})


module.exports = { ORDER }