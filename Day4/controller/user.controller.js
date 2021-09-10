// const db = require("../models"); // models path depend on your structure
// const Tutorial = db.tutorials;

const findAllUsr = require("../service/User-service")

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    // Tutorial.findAll({ where: condition })
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving tutorials."
    //     });
    //   });
    try{
        findAllUsr().then(
            data => res.send(data)
        )
    }catch(err){
         console.log(err)
         res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
         });
    }
  };