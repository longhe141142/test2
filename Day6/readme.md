

# NO SQL
## DEFINITION
- NoSQL databases are purpose built for specific data models and have flexible schemas for building modern applications. NoSQL databases are widely recognized for their ease of development, functionality, and performance at scale
## HOW DOES IT WORK?
- NoSQL databases use a variety of data models for accessing and managing data.
- Optimized specifically for applications that require large data volume, low latency, and flexible data models
  * -->Achieved by relaxing some of the data consistency restrictions of other databases.

## WHY NoSQL?
- NoSQL databases are a great fit for many modern applications such as mobile, web, and gaming that require flexible, scalable, high-performance, and highly functional databases to provide great user experiences.
  + __Flexibility__: NoSQL databases generally provide flexible schemas that enable faster and more iterative development. The flexible data model makes NoSQL databases ideal for semi-structured and unstructured data.
  + __Scalability__: NoSQL databases are generally designed to scale out by using distributed clusters of hardware instead of scaling up by adding expensive and robust servers. Some cloud providers handle these operations behind-the-scenes as a fully managed service.
  + __High-performance__: NoSQL database are optimized for specific data models and access patterns that enable higher performance than trying to accomplish similar functionality with relational databases.
  + __Highly functional__: NoSQL databases provide highly functional APIs and data types that are purpose built for each of their respective data models.

# SQL
## DEFINITION
- SQL (Structured Query Language) is a standardized programming language that's used to manage relational databases and perform various operations on the data in them
- SQL is regularly used not only by database administrators, but also by developers writing to set up and run analytical queries:
  *  data integration scripts 
  *  data analysts looking
## USAGE
- The uses of SQL include modifying database table and index structures; adding, updating and deleting rows of data; and retrieving subsets of information from within a database for transaction processing and analytics applications. Queries and other SQL operations take the form of commands written as statements -- commonly used SQL statements include select, add, insert, update, delete, create, alter and truncate.

#  SQL & NoSQL
| Data Storage Model     | SQL Databases | NoSQL Databases   |
| :---        |    :----   |          :--- |
| Data Storage Model  | Tables with fixed rows and columns  | Document: JSON documents, <br>Key-value: key-value pairs, <br>Wide-column: tables with rows<br> and dynamic columns,<br> Graph: nodes and edges   |
| Development History   | Developed in the 1970s with a <br>focus on reducing data duplication | Developed in the late 2000s<br> with a focus on scaling and allowing for<br> rapid application change driven <br>by agile and DevOps practices.  |
| Examples  | Oracle, MySQL, Microsoft SQL Server, <br>and PostgreSQL  | Document: MongoDB and CouchDB,<br> Key-value: Redis and DynamoDB, <br>Wide-column: Cassandra and HBase,<br> Graph: Neo4j and Amazon Neptune |
| Primary Purpose |General purpose | Document: general purpose,<br> Key-value: large amounts of data <br>with simple lookup queries, <br>Wide-column: large amounts of data<br> with predictable query patterns,<br> Graph: analyzing and traversing<br> relationships between connected data |
| Schemas | Rigid | Flexible|
| Scaling | Vertical (scale-up with a larger server) | Horizontal (scale-out across <br>commodity servers)|
| Multi-Record ACID<br> Transactions | Supported | Most do not support<br> multi-record ACID transactions. <br>However, some—like MongoDB—do.|
| Joins| Typically required | Typically not required|
| Data to Object Mapping| Requires ORM (object-relational<br>  mapping) |Many do not require ORMs.<br> MongoDB documents map directly<br> to data structures in<br> most popular programming languages.
|

# Mongoose DB with Nodejs
## Create schema:
- Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection:
```javascript
import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });
```
- _If you want to add additional keys later, use the Schema#add method._
- SchemaTypes are:
  * String
  * Number
  * Date
  * Buffer  
  * Boolean
  * Mixed
  * ObjectId
  * Array
  * Decimal128
  * Map
## Creating a model:
- To use our schema definition, we need to convert our ```Schema``` into a Model we can work with. To do so, we pass it into ```mongoose.model(modelName, schema)```:

```javascript
  const Blog = mongoose.model('Blog', blogSchema);
```
- **Ids**
By default, Mongoose adds an ```_id``` property to your schemas.
```javascript
const schema = new Schema();

schema.path('_id'); // ObjectId { ... }
```
- When you create a new document with the automatically added ```_id``` property, Mongoose creates a new ```_id``` of type ObjectId to your document.
```javascript
const Model = mongoose.model('Test', schema);

const doc = new Model();
doc._id instanceof mongoose.Types.ObjectId; // true
```

## Small tips for custom id
- Custom your own id:
```javascript
  var schema = mongoose.Schema(
    {
      _id: String,
      Pass: String,
      UseName: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const USER = mongoose.model("USER", schema);
```

## Static function Schema
- You can also add static functions to your model. There are two equivalent ways to add a static:
  * Add a function property to ```schema.statics```
  * Call the ```Schema#static()``` function
```javascript
 // Assign a function to the "statics" object of our animalSchema
  animalSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
  };
  // Or, equivalently, you can call `animalSchema.static()`.
  animalSchema.static('findByBreed', function(breed) { return this.find({ breed }); });

  const Animal = mongoose.model('Animal', animalSchema);
  let animals = await Animal.findByName('fido');
  animals = animals.concat(await Animal.findByBreed('Poodle'));
```
- __Do not declare statics using ES6 arrow functions (```=>```). Arrow functions explicitly prevent binding this, so the above examples will not work because of the value of this.__

## Query Helpers

You can also add query helper functions, which are like instance methods but for mongoose queries. Query helper methods let you extend mongoose's [chainable](https://mongoosejs.com/docs/queries.html) query builder API.

```javascript
 animalSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') })
  };

  const Animal = mongoose.model('Animal', animalSchema);

  Animal.find().byName('fido').exec((err, animals) => {
    console.log(animals);
  });

  Animal.findOne().byName('fido').exec((err, animal) => {
    console.log(animal);
  });
```

- Example work with model like my nodeJS project:
```javascript
const db = require("../model/index");
const USERR = db.USER;
db.connect();

const services = {
  _Usr_Service_: {
    getAllUser: () => {
      db.USER.find({})
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("err:", err);
        });
    },
    addUser: (user) => {
      let { Id, Pass, UseName } = user;
      return new db.USER({
        _id: Id,
        Pass: Pass,
        UseName: UseName,
      }).save()
      .then(
          () => {return `Id: ${Id} successfully added!`}
      ).catch(err=>err)
    },
    deleteUser: (id) => {
     return db.USER.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          return "Not found Id"
        } else {
          return "Delete successfully"
        }
      })
      .catch(err => {
        console.log(err)
         return "Something crashed"
      });
    },
    updateUserPass: (filter,update) => {
      return db.USER.findOneAndUpdate(filter,update)
      .then(data=>{
        if(!data){
          return "Not found USER"
        }
        return `UPDATE SUCCESSFULLY!`
      }).catch(err => {
        console.log(err)
         return "Something crashed"
      });
    }
  },
};

module.exports = services

services._Usr_Service_.getAllUser();

services._Usr_Service_.addUser({
    Id:"13swdssddss4",
    UseName:"he141142",
    Pass:"1234"
}).then(data => {console.log(data)})

const test = async()=>{
  let message = await services._Usr_Service_.deleteUser("13swdssdss4");
  console.log("message:",message)
  message = await services._Usr_Service_.updateUserPass({_id:"13wdssdss4"},{Pass:"1998"})
  console.log("message:",message)
}
test()
```








