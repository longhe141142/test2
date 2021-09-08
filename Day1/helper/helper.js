const prompt = require("prompt-sync")();

const GetUserText = (msg) => {
  const Text = prompt(`${msg}`);
  return Text;
};

const GetInteger = (msgInput, msgErr, min, max) => {
  while (true) {
    var g = GetUserText(msgInput).trim();
    if (isNumeric(g)) {
      if (parseInt(g) < min || parseInt(g) > max) {
        console.log(msgErr);
      } else {
        return parseInt(g);
      }
    } else {
      console.log(msgErr);
    }
  }
};

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

const displayArr = (...args) => {
  let g = "[ ";
  try {
    args.map((val, index, arr) => {
      g += index !== arr.length - 1 ? val + ", " : val + " ]";
    }, 0);
  } catch (err) {
    return err;
  }
  return g;
};

const InputSelection = (msg, errMsg, menu) => {
  console.log(menu);
  let choice = GetInteger(msg, errMsg, 0, 3);
  return choice;
};

// InputSelection("Enter input: ","Invalid Value",
// `              1.Arr1
//               2.Arr2
//               3.Arr3
//               0.Exit`)

module.exports = { GetUserText, displayArr, InputSelection };
