const router = require('express').Router();
const apiRoutes = require('./api');

// Mounting API routes for users & thoughts
router.use('/api', apiRoutes);

module.exports = router;