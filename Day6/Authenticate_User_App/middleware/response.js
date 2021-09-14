const _Response_ = {
    SendStatus:  (err,res) => {
        res.status(200).send(JSON.stringify({
            status: "SUCCESS",
            statusCode: 200,
            message: "EVERY THING OK"
        }))
    },
    SendUser: (err,res,user) => {
        res.send(
            JSON.stringify(user)
        )
    }
}



module.exports = _Response_