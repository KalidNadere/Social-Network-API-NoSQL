const data = {
  users: [
    {
      username: 'johndoe',
      email: 'johndoe@example.com',
    },
    {
      username: 'janedoe',
      email: 'janedoe@example.com',
    },
  ],
  thoughts: [
    {
      thoughtText: 'Here is a thought',
      userId: '1',
      username: 'johndoe',
    },
    {
      thoughtText: 'Here is another thought', 
      userId: '2',
      username: 'janedoe'
    },
  ],
  reactions: [
    {
      reactionBody: 'like this thought',
      username: 'johndoe', 
      thoughtId: '1',
    },
    {
      reactionBody: 'love this thought',
      username: 'janedoe', 
      thoughtId: '2',
    },
  ],
};

module.exports = data;