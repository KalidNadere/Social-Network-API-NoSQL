const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');
const data = require('./data');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api');

// Seed data into the database
async function seedData() {
  try {
    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();
    await Reaction.deleteMany();

    // Seed users
    const users = await User.create(data.users);

    // Update thought and reaction data with user IDs
    const thoughts = data.thoughts.map((thought, index) => ({
      ...thought,
      userId: users[index]._id,
    }));

    const reactions = data.reactions.map((reaction, index) => ({
      ...reaction,
      thoughtId: thoughts[index]._id,
      username: users[index].username,
    }));

    // Seed thoughts and reactions
    await Thought.create(thoughts);
    await Reaction.create(reactions);

    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
