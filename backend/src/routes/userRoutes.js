const express = require('express');
const {getAllUsers,getUserByEmail, updateUser, deleteUser} = require('../controllers/userControllers')

const router = express.Router();

router.get('/users',getAllUsers)

router.get('/user', getUserByEmail)

router.patch('update',updateUser)

router.delete('/delete',deleteUser)



module.exports = router;