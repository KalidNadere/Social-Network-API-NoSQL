// Importing Mongoose library
const {mongoose} = require('mongoose');

// Defining thought schema, with fields thoughtText, CreatedAt, username and reactions
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => new Date(createdAt).toISOString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      reactionId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => new Date(createdAt).toISOString(),
      },
    },
  ],
});

// Adding virtual property 'reactionCount' to the schema
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Creating the Thought model using mongoose.model
const Thought = mongoose.model('Thought', thoughtSchema);

// Exporting Thought model for use in other parts of the app
module.exports = Thought;