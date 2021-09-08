//5.1
var users = [
  {
    username: "test1",
    email: "test1@vmodev.com",
    age: 20,
    status: "inactive",
  },
  {
    username: "test2",
    email: "test2@vmodev.com",
    age: 25,
    status: "inactive",
  },
  {
    username: "test3",
    email: "test3@vmodev.com",
    age: 26,
    status: "inactive",
  },
];
//5.2
const dob = "https://localhost:8080?name=Nguyen Van A&age=20";
//5.3
var obj1 = {
  username: "test1",
  email: "test1@vmodev.com",
  age: 20,
};

var obj2 = {
  status: "inactive",
};

var obj3 = {
  company: "VMO",
  status: "inactiv2e",
};
//5.4
var users1 = [
  {
    username: "test1",
    email: "test1@vmodev.com",
    age: 20,
    status: "inactive",
  },
  {
    username: "test2",
    email: "test2@vmodev.com",
    age: 25,
    status: "inactive",
  },
];

var users2 = [
  {
    username: "test2_1",
    email: "test2_1@vmodev.com",
  },
];

var users3 = [
  {
    username: "test3_1",
    status: "inactive",
  },
  {
    username: "test3_2",
    status: "inactive",
  },
];
const OBJ_CONCAT = [obj1, obj2, obj3];
const ARR_CONCAT = [users1,users2,users3]
module.exports = { dob, users, OBJ_CONCAT ,ARR_CONCAT};
