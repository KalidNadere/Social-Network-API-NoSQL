const router = require('express').Router();

const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller')

// Define routes for /api/users
router.route('/')
.get(getAllUsers)
.post(createUser);

// Define routes for /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(removeUser);

// Define routes for adding & removing friends
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;