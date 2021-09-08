const filterAge = (data)=> {
    return data.filter( (elm,index,arr)=>{
        return elm.age < 28;
    } )
}

const filterStatus = (data) =>{
    return data.filter( (elm,index,arr)=>{
        return elm.status = 'active';
    } )
}

const filterStat_and_age = (data) => {
    return data.filter( (elm,index,arr)=>{
        return elm.status === 'inactive' && elm.age <25;
    } )
}

var users = [
        {
            username: 'test1',
            email: 'test1@vmodev.com',
            age: 20,
            status: 'inactive'
        },
        {
            username: 'test2',
            email: 'test2@vmodev.com',
            age: 25,
            status: 'inactive'
        },
        {
            username: 'test3',
            email: 'test3@vmodev.com',
            age: 26,
            status: 'inactive'
        }
    ]
// console.log(filterStat_and_age(users))
// console.log(filterAge(users))
module.exports = { filterAge,filterStatus, filterStat_and_age}