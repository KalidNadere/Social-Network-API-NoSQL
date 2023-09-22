const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Mounting API routes for users & thoughts
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes)

module.exports = router;