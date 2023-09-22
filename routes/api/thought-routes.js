const express = require('express');
const {
  getAllThoughts,
  createThought,
  getSingleThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thought-controller');
const router = require('.');

// /api/thoughts
router.route('/').get(getAllThoughts)

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/thoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(removeThought)
.post(createReaction)
.delete(removeReaction);

module.exports = router;
