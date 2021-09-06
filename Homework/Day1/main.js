const {
  GetUserText,
  InputSelection,
  displayArr,
} = require("./helper/helper.js");
const { concatString } = require("./concatString.js");
const { calcSumOfArray } = require("./calcSumOfArray.js");
const { quickSort } = require("./sortArr");
const { getNumberUniqueChar } = require('./stringMethod')
const { getObjAttr } = require("./getObjAttribute")
const { resolveJSONOutput } = require("./JSON EXERCISE/JSONMachine")
const main = () => {
  //   3.1 concatString.js
  console.log(`===================3.1===================`);
  console.log("Concat two String: ")
  var firstInputUsr = GetUserText("Enter your first text: ");
  var secondInputUsr = GetUserText("Enter your second text: ");
  console.log(
    `String after concat: ${concatString(
      `${firstInputUsr}`,
      `${secondInputUsr}`
    )}`
  );
  //   3.2 calcSumOfArray.js
  console.log(`===================3.2===================`);
  console.log("Calculate sum of every element: ")
  const arr1 = [1, 8, 7, 6, 3];
  const arr2 = [2, 4, 9, 8];
  const arr3 = [1, 7, 8, 9];
  while (true) {
    let option = InputSelection(
      "Enter input(0 to exit)->: ",
      "Invalid Value",
      `                  1.${displayArr(...arr1)}
                  2.${displayArr(...arr2)}
                  3.${displayArr(...arr3)}
                  0.Exit`
    );
    if (option === 0) {
      break;
    }
    switch (option) {
      case 1:
        calcSumOfArray(...arr1);
        break;
      case 2:
        calcSumOfArray(...arr2);
        break;
      case 3:
        calcSumOfArray(...arr3);
      default:
        break;
    }
  }
  //   3.3 sortArr.js
  console.log(`===================3.3===================`);
  console.log("Using quicksort: ")
  let arr = [8, 6, 3, 1, 4];
  console.log(`Initial arr: ${arr}`);
  quickSort(arr, 0, arr.length - 1);
  console.log("final array after sort: [" + arr + "]");
  // 3.4 stringMethod.js
  console.log("===================3.4===================")
  console.log("Print unique character and total appearance of them: ")
  console.log(`HellooooooWorrlddd!! ====> ${getNumberUniqueChar("HellooooooWorrlddd!!")}`);
//   3.5 getObjAttribute.js
console.log("===================3.5===================")
console.log("Get Values,Keys,KeyValuePair: ")
var product = {
    name: "Dell precision 5540",
    model: "DELL",
    year: 2021,
    price: {
      unitPrice: 350,
      tax: 25,
      discount: 10,
      total: 365,
    },
  };
// console.log(product)
getObjAttr(product,"keyValuePairs")
getObjAttr(product,"values")
getObjAttr(product,"keys")
//   3.6 - 3.7  PATH:"./JSON EXERCISE/JSONMachine.js"

var jsonData = [
  { id: 1, parentId: null, name: "Root 1" },
  { id: 2, parentId: 1, name: "Child Root 1 1" },
  { id: 3, parentId: null, name: "Root 2" },
  { id: 5, parentId: 3, name: "Child Root 2" },
  { id: 6, parentId: 7, name: "Child of Child Root 2" },
  { id: 7, parentId: 5, name: "Child of Child Root 2" },
  { id: 8, parentId: 2, name: "Child of Child Root 1 1" },
  { id: 9, parentId: null, name: "Root 2" },
  { id: 10, parentId: 1, name: "Child Root 1 2" },
  { id: 11, parentId: 2, name: "Child Root 1 2" },
];

resolveJSONOutput(jsonData)
};




main();
