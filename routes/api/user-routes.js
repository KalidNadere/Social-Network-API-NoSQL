const router = require('express').Router();

// Import UserController from controllers folder
const UserController = require('../../controllers/user-controller');

// Handling the routes for getting all users and creating a new user
router
.route('/')
.get(UserController.getAllUsers)
.post(UserController.createUser)

// Routes for getting, updating & deleting single user by ID
router
.route('/:userId')
.get(UserController.getSingleUser)
.put(UserController.updateUser)
.delete(UserController.removeUser)

// Routes for adding & deleting a friend from user's friend list
router
  .route('/:userId/friends/:friendId')
  .post(UserController.addFriend)
  .delete(UserController.removeFriend);

module.exports = router;