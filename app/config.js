var mongoose = require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;

// mongoose.connect("mongodb://localhost/shortly")
  mongoose.connect(connectionString)
var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function(){
  // var userSchema = mongoose.Schema({
  //   username:{type: String, unique: true},
  //   password:String
  console.log('Mongodb connection is open!');
  });

module.exports = db;

//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');

//       user.string('username', 100).unique();
//       user.string('password', 100);

// db.on('error', console.error.bind(console, "connection error:"));
// db.once('open', function(){
//   var userSchema = mongoose.Schema({
//     username:{type: String, unique: true},
//     password:String
//   });

//   userSchema.pre('save', function(next){
//       bcrypt.hash(this.password, null, null, function(err, hash){
//         if (err){
//           next();
//         }
//         this.password = hash;
//         next();
//       });
//   });

//   userSchema.methods.comparePassword = function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
//       callback(isMatch);
//     });
//   };
// });

// module.exports = mongoose.model('users', userSchema);
//module.exports = mongoose.model('links', linkSchema);


// mongoose.connect("mongodb://localhost/shortly")

//------------------------------------//////mongo above this line//////

// var Bookshelf = require('bookshelf');
// var path = require('path');

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });


// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
