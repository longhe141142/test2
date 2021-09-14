require('dotenv').config()


module.exports = {

    HOST: process.env.HOST,
    
    USER: "root",
    
    PASSWORD: "l8019454",
    
    DB: "FirsProject_F11_N12",
    
    dialect: "mysql",
    
    pool: {
    
    max: 5,
    
    min: 0,
    
    acquire: 30000,
    
    idle: 10000
    
    }
    };