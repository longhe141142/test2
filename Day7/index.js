
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');


 const main= async()=>{
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
     const uri = process.env.URI

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect(function(err, db) {
            assert.equal(null, err);
            db.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
              assert.equal(null, err);
              assert.equal(1, result);
              db.close();
            });
          });;
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        // await client.close();
        console.log("done process")
    }

    const uri = "mongodb+srv://longnt1:l8019454@f11-n12.sdpvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose 
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
          })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));



async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

}

main()

module.exports =  { main }