const db = require("./index")

const testAuthen = () => {
    db.sequelize.authenticate()
    .then(console.log("CONNECTING.."))
    .catch(err => console.log(err))
}

module.exports = testAuthen