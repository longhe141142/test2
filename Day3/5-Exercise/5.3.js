const concatObj = (...objs) => {
  let ObjN = {};
  objs.map((elm2) => {
    Object.keys(elm2).map((elm) => {
    //   console.log(elm);
      if (!ObjN.hasOwnProperty(elm)) {
        // console.log();
        ObjN[elm] = elm2[elm];
      }
    });
  });
  return ObjN;
};

// console.log(concatobj(obj1,obj2,obj3))

module.exports = concatObj;
