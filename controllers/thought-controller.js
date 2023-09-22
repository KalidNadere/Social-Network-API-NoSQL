const { Thought } = require('../models');

const thoughtController = {
  // function to get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find().sort({ createdAt: -1 });
      res.json(thoughts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // function to create a new thought
  createThought: async (req, res) => {
    try {
      const newThought = new Thought(req.body);
      await newThought.save();
      res.status(201).json(newThought);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },

  // function to get a single thought by ID
  getSingleThought: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // function to update a thought by ID
  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },

  // function to remove a thought by ID
  removeThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndRemove(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json({ message: 'Thought removed' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // function to create a reaction for a thought
  createReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      const newReaction = {
        reactionBody: req.body.reactionBody,
        username: req.body.username,
      };

      thought.reactions.push(newReaction);
      await thought.save();

      res.status(201).json(newReaction);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },

  // function to remove a reaction from a thought
  removeReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      const reaction = thought.reactions.find(
        (reaction) => reaction._id.toString() === req.params.reactionId
      );
      if (!reaction) {
        return res.status(404).json({ error: 'Reaction not found' });
      }

      thought.reactions.pull(req.params.reactionId);
      await thought.save();

      res.json({ message: 'Reaction removed' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

// Exporting thoughtController
module.exports = thoughtController;
