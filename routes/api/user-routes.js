const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// setup GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up get one, put and delete at api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// setup put and delete for api/users/:Userid/friends/:friendId
// router
//     .route('/:Userid/friends/:friendId')    
//     .put(addFriend)
//     .delete(deleteFriend);

module.exports = router;        