const express = require('express');
const router = express.Router();

const {
  getAllThoughts,
  createThought,
  getSingleThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// Define thought routes
router.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thoughts/thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(removeThought)

// Route for reactions
router.route('/:thoughtId/reactions')
.post(createReaction)

// Route for removing a reaction
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;
