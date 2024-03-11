// external imports
const express = require('express');

// internal imports
const { getUsers, addUser, removeUser } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUserValidators, addUserValidationsHandler } = require('../middlewares/users/userValidators');
const { checkLogin, requireRole } = require('../middlewares/common/checkLogin');

const router = express.Router();

// user page
router.get('/', decorateHtmlResponse("Users"), checkLogin, requireRole('admin'), getUsers);

// add user
router.post('/', checkLogin, avatarUpload, addUserValidators, addUserValidationsHandler, addUser);

// delete user
router.delete('/:id', removeUser)

module.exports = router;