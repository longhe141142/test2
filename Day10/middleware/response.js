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
    }
}



module.exports = _Response_