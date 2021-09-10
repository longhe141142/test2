const db = require("../index")

const USER = db.sequelize.define("USER",{
    Id: {
        type: db.Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true,
    },
    UserName: {
        type: db.Sequelize.STRING(30),
        allowNull: false,
    },
    Password: {
        type: db.Sequelize.STRING(255),
        allowNull: false,
    },
    Age: {
        type: db.Sequelize.INTEGER,
        allowNull: true,
    },
    Email: {
        type: db.Sequelize.STRING(100),
        allowNull: true,
    },
    Phone: {
        type: db.Sequelize.STRING(20),
        allowNull: true,
    },
    Address: {
        type: db.Sequelize.STRING(500),
        allowNull: true,
    },
    IsActive: {
        type: db.Sequelize.INTEGER(1),
        allowNull: true,
    },
    CreateBy: {
        type: db.Sequelize.DATE,
        allowNull: true,
    },
    CreateAt: {
        type: db.Sequelize.DATE,
        allowNull: true,
    },
    UpdateAt: {
        type: db.Sequelize.DATE,
        allowNull: true,
    },

    UpdateBy: {
        type: db.Sequelize.DATE,
        allowNull: true,
    }

},
{freezeTableName: true,
  timestamps : true,
  createdAt: false,
  updatedAt: false,})

// console.log("USER:",USER)

module.exports = { USER }