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

// /api/users
router.route('/').get(getAllUsers);

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(removeUser)
.post(addFriend)
.delete(removeFriend)

module.exports = router;