const app = require("../index")
const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)
const {ModifyUsr} = require("../service/User-service");



describe("GET /users", () => {

	it("should return status 200, and array of user", async () => {
    	 let res = await chai
        	.request(app)
        	.get('/api/user')
       
    	expect(res.status).to.equal(200)
        expect(res.body).to.be.a('array')
        
       
	})

})



describe("POST /users", () => {
    let id = ''

	it("should return status 200,and user object",  (done) => {
         
        	chai.request(app).
            post('/api/user').
            send(
               JSON.stringify({Pass: "1234", UseName: "zkli"}))
            .end((err,res) => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.a('object')
                expect(res.body).to.have.property('Id')
                expect(res.body).to.have.property('UseName')
                expect(res.body).to.have.property('Pass')
            })

            done()
               
	})

	afterEach("after test:", (done) => {
        ModifyUsr(id,"DELETE").then(
           data => console.log("data",data)
       ).catch(err=>console.log("err",err))
       done()
	})
})


