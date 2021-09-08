const conCatArry = (...Arrays) => {
  return Arrays.reduce((acc, item, index, arr) => {
    // console.log("acc",acc)
    acc.push(item);
    return acc;
  }, []);
};

//  console.log(conCatArry(users1,users2,users3))
module.exports = conCatArry;
