const { connect } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

module.exports = connect(connectionString);
