const mapProcess = (data) => {
    data.map((val,index,arr)=>{
        val.age+=1;
        val.status = "active"
        val.email = "*****@vmodev.com"
    },0)
    return data
}

// mapProcess(users)
// console.log(users)

module.exports = mapProcess