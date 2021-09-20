module.exports = { 
  validateWhiteSpace: (str)=>{
       let reg = /^[a-z\d\-_]+$/i
       return reg.test(str);
  },
  validateNumber: (phone) =>{
       let reg = /^(\d{3,})+$/i
       return reg.test(phone);
  },
  validateId: (model) => {
    model.schema.path("_id").validate( (n) => {
      return validate.validateWhiteSpace(n);
    }, "Invalid id");
  },
};

var validate = require("./schema.validate")

// console.log(require('./schema.validate'). validateNumber("45dsffsd"))