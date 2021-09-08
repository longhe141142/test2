const traverseForEach = (data) =>{
    console.log("USE FOR EACH:")
    data.forEach(element => {
        console.log("ELM:",element)
    });
}


// console.log(getAllUrlParams('https://localhost:8080?name=Nguyen Van A&age=20'))
module.exports = traverseForEach