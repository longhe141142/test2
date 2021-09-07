const {info} = require('./data')
class Controller{
    getAll = async (data) =>{
        return new Promise((resolve,reject)=>{
            resolve(data)
        })
    }

}

module.exports = Controller