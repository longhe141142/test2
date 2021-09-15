const assert = require('assert');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schemas to store movie and actor documents.
var movieSchema = new Schema ({
  title: String,
  year: Number,
  actors: [Schema.Types.ObjectId]
})

// // Takes a mongoose DB as argument.
// module.exports = function (db) {
//   assert.notEqual(null, db);

//   // Add your schema models to Mongoose.
//   this.Movie = db.model('Movie', movieSchema);

//   return this;
// };

module.exports = mongoose.model("Movie",movieSchema)