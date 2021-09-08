const { filterAge,filterStatus, filterStat_and_age} = require("./5-1-2")
const mapProcess = require("./5-1-1")
const { dob, users, OBJ_CONCAT ,ARR_CONCAT}= require("./data")
const traverseForEach = require("./5-1-3")
const getAllUrlParams = require("./5.2")
const concatObj = require("./5.3")
const conCatArry = require("./5.4")

// 5.1.2
//find all user have age < 28
console.log("FILTER AGE",filterAge(users))

//find all user status inactive and age <25
console.log("FILTER STATUS AND AGE",filterStat_and_age(users))

    //5.1.1
    //change status to active , age + 1 and encoding email
    console.log("AFTER USE MAP TO CHANGE DATA",mapProcess(users))
//find all user status active:
console.log("FILTER STATUS",filterStatus(users))    
//5.1.3 FOR EACH
traverseForEach(users)
//5.2 PARAM URL
console.log("PARAM:",getAllUrlParams(dob))
//5.3
console.log("OBJECT CONCAT",concatObj(...OBJ_CONCAT))
//5.4
console.log("ARRAY CONCAT",conCatArry(...ARR_CONCAT))