const router = require('express').Router();


const { getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    newFriend,
    deleteFriend
} = require('../../controllers/userController')



// get and post on /api/user
router.route('/').get(getUsers).post(createUser);

// GET, PUT and DELETE on /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST and DELETE friends on /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(newFriend).delete(deleteFriend)


module.exports = router;