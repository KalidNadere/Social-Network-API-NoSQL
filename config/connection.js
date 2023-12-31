const mongoose = require('mongoose');

// Setting connection to MongoDB database using mongoose
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connected successfully');
});

module.exports = db;
