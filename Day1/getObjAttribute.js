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

let getObjAttr = (obj, input) => {
    let rel = ""
    switch(input.trim().toLowerCase()){
        case "values":
            console.log(input,Object.values(obj))
            break;
        case "keys":
            console.log(input,Object.keys(obj));  
            break;
        case "keyvaluepairs":
            rel = Object.entries(obj).map((val,index) => {
                return {
                  key: val[0],
                  value: val[1]
                }
              })
              console.log(input,rel);
            break;
        default:
            console.log(`${input}: null`)
    }
};

// getObjAttr(product,"keyValuePairs")
// getObjAttr(product,"values")
// getObjAttr(product,"keys")

module.exports = { getObjAttr }

