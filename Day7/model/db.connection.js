// const {MongoClient} = require('mongodb');


//  const main= async()=>{
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//      const uri = "mongodb+srv://longnt1:l8019454@f11-n12.sdpvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect(function(err, db) {
//             assert.equal(null, err);
//             db.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
//               assert.equal(null, err);
//               assert.equal(1, result);
//               db.close();
//             });
//           });;
//         // Make the appropriate DB calls
//         await  listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         // await client.close();
//         console.log("done process")
//     }

const path = require("path");
const db  = require("./index");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = async () => {
  const uri = process.env.URI;
   await db.mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(
      () => {console.log("GOOD CONNECTION")}
    )
    .catch((err) => console.log(err));
    // console.log(db.mongoose.MongoClient)
};





