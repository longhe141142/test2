const db = require("./index")

const testAuthen = () => {
    db.database.authenticate()
    .then(console.log("CONNECTING.."))
    .catch(err => console.log(err))
}

testAuthen();
