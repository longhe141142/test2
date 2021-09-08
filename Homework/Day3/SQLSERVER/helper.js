const extractPe = (people) =>{
    people.map((val,index,arr) => {
        console.log(`User id: ${val.id} and User name: ${val.name}`)
    },0)
}

module.exports = { extractPe }