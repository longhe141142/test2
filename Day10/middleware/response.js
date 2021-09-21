const _Response_ = {
    SendStatus:  (res) => {
        res.status(200).send(JSON.stringify({
            status: "SUCCESS",
            statusCode: 200,
            message: "EVERY THING OK"
        }))
    },
    SendUser: (res,user) => {
        res.send(
            JSON.stringify(user)
        )
    },
    SendStatus_WithMessage: (res,statusCode,message)=>{
        res.status(statusCode).send(JSON.stringify({
            status: (parseInt(statusCode)>=400)? "FAILED" : "SUCCESS",
            statusCode: statusCode,
            message: message
        }))
    }
}



module.exports = _Response_