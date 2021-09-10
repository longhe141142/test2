const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// sequelize.authentic
// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// db.USER = require('./Object/user')
module.exports = db;
const { USER:UsrModel } = require("./Object/user")
db["model"] ={} 
db.model.USER= UsrModel
// console.log("UsrModel",UsrModel)
// console.log(db)
