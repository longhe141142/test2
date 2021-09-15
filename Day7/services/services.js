const db = require("../model/index")

db.connect();

const services = {
    _Usr_Service_: {
        getAllUser: () =>{
            db.USER.find({}).then(
                data => {
                    console.log(data)
                }
            ).catch(err => {
                console.log("err:",err)
            })
        }
    }
    
}

services._Usr_Service_.getAllUser()

