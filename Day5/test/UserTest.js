
 let chai = require('chai')
 let expect = chai.expect
 let should = chai.should()
 let assert = chai.assert;
 let { getIdByUseName } = require('../service/User-service')


// const funcTest= async() =>{ 
//     let ot = await getIdByUseName("long");
//     // console.log()
//     assert.typeOf(ot,"object","obj")
//     expect(ot).to.equal(42);

// }

let sum = (a,b) =>{
    return a+b
}

it('use async', async ()=>{
    let ot =  await getIdByUseName("long")
    expect(ot).to.be.a("Object")

})

it('use resolve',  function(done) {
  let ot =  getIdByUseName("long").then(data =>{
    assert.typeOf(data,"object","obj")
    console.log(data)
    expect(data).to.be.a("Object")
   
  }).then(done, done);
    
});

it('test sum()',  function(done) {
    expect(sum(1,3)).to.equal(4)
    done()
});


