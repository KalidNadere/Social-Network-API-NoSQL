// Importing User from models
const { User } = require('../models');

const userController = {
  // Function to get all user
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Function to create new user
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },

  // Create new user by Id
  getSingleUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update a user by Id
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
      });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },

  // Removing a user by Id
  removeUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndRemove(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User removed' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
};

// Exporting userController
module.exports = userController;
