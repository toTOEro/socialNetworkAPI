const router = require('express').Router();


const { getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/userController')



// get and post on /api/user
router.route('/').get(getUsers).post(createUser);

// GET, PUT and DELETE on /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);



module.exports = router;