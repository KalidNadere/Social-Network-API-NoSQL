const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: String,
    required: true,
  },
  {
    timestamps: true,
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;