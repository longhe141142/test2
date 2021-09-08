const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'l8019454',
    database: 'new_schema'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = { connection }