const express = require('express');
const router = require('express').Router();

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

router.route('/:thoughtId/reactions')
.post(createReaction)
.delete(removeReaction);

module.exports = router;
