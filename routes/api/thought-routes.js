const router = require('express').Router();

// Importing ThoughtController from controllers folder
const ThoughtController = require('../controllers/ThoughtController');

// Handling the routes for getting all thoughts and creating a new thought
router
.route('/')
.get(ThoughtController.getAllThoughts)
.post(ThoughtController.createThought)

// Routes for getting, updating & deleting single thought by ID
router
.route('/:thoughtId')
.get(ThoughtController.getSingleThought)
.put(ThoughtController.updateThought)
.delete(ThoughtController.removeThought)

// Routes for creating & deleting a reaction from a thought
router
  .route('/:thoughtId/reactions/:reactionId')
  .post(ThoughtController.createReaction)
  .delete(ThoughtController.removeReaction);

module.exports = router;