// Importing mongoose library from Node.js
const mongoose = require('mongoose');

// Defining user schema, using 'mongoose.Schema constructor with username, email, thoughts and friends fields
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

// Adding virtual property 'friendCount' to the schema, to compute length of 'friends' array
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Creating the User model using mongoose.model
const User = mongoose.model('User', userSchema);

// Exporting User model
module.exports = User;