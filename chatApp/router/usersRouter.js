
// external imports
const express = require('express');

// internal imports
const { getUsers, addUser, removeUser } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUserValidators, addUserValidationsHandler } = require('../middlewares/users/userValidators');

const router = express.Router();

// user page
router.get('/', decorateHtmlResponse("Users"), getUsers);

// add user
router.post('/', avatarUpload, addUserValidators, addUserValidationsHandler, addUser);

// delete user
router.delete('/:id', removeUser)

module.exports = router;