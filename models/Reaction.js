const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: String,
    thoughtId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
