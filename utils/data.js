module.exports = {
  users: [
    {
      username: 'user1',
      email: 'user1@example.com',
    },
    {
      username: 'user2',
      email: 'user2@example.com',
    },
  ],
  thoughts: [
    {
      text: 'Thought 1',
      userId: 1, // User ID associated with this thought
    },
    {
      text: 'Thought 2',
      userId: 2, // User ID associated with this thought
    },
  ],
  reactions: [
    {
      reactionType: 'like',
      thoughtId: 1, // Thought ID associated with this reaction
    },
    {
      reactionType: 'love',
      thoughtId: 2, // Thought ID associated with this reaction
    },
  ],
};
