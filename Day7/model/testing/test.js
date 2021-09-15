
const { main } = require('../index')
const movie = require('./schema')
main()


const run = async()=>{
    let test = new movie({
        title: "test",
        year: 2022,
    })
    
      await test.save().then( 
        data => {
        console.log("hih",data)
    }
    ).catch(err=> {console.log(err)})
}

run()
