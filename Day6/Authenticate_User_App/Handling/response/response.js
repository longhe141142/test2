const _Response_ = (err,res) => {
    res.status(200).send(JSON.stringify({
        status: "SUCCESS",
        statusCode: 200,
        message: "EVERY THING OK"
    }))
}

module.exports = _Response_