// const mongoose = require('mongoose');

const { connect, connection } = require('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongdodb://localhost:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;





// const mongoose = require('mongoose');

// Establishing connection to a MongoDB database, using mongoose
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true, 
//   useFindAndModify: false, 
// });


// const db = mongoose.connection;

// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// module.exports = db;