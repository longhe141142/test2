const db = require("../index")
const { v4: uuidv4 } = require('uuid');

const USER = db.database.define("USER",{
    Id: {
        type: db.Sequelize.UUID,
        defaultValue: uuidv4(),
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
    }
},
{freezeTableName: true,
  timestamps : true,
  createdAt: false,
  updatedAt: false,})


module.exports = { USER }