const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://longnt1:l8019454@f11-n12.sdpvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try{
    client.connect(err => {
        const collection = client.db("test").collection("customers");
        // perform actions on the collection object
      //   client.close();
      const g =  client.db.customers.find({_id:"123"});
      console.log("g is:",g)
      });
}catch(err){
    console.log(err)
}
