
const  { insertPe2 ,insertPe1,displayAllPe } = require('./CRUD')
const { user } = require("./entity/user")
//View
displayAllPe();
//Create
let u = new user(7,"thu")
insertPe1(u)
