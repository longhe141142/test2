const { connection } = require('./DBContext')
const { extractPe:ex } = require('./helper')

const displayAllPe = () => {
connection.query('SELECT * FROM new_table', (err,rows) => {
    if(err) throw err;
    console.log('Data received from Db:');
    ex(rows)
  });
  
}

const insertPe1 = (people) => {
    connection.query(`INSERT INTO new_table (id,name)
    values 
    (${people.id},"${people.name}");`,(err,res)=>{
        if(err) throw err
        else console.log("INSERTED!")
    })
}

const insertPe2 = (people) => {
    connection.query(`INSERT INTO new_table (id,name)
    values 
    (?,?);`,[people.id,people.name],(err,res)=>{
        if(err) throw err
        else console.log("INSERTED!")
    })
}

module.exports = { insertPe2 ,insertPe1,displayAllPe }