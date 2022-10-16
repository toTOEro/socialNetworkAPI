const router = require('express').Router();


const { getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController')



// get and post on /api/user
router.route('/').get(getUsers).post(createUser);

// PUT and DELETE on /api/user/:userId
router.route('/:userId').put(updateUser).delete(deleteUser);



module.exports = router;