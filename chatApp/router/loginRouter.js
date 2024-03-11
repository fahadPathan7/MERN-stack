// external imports
const express = require('express');

// internal imports
const { loginController, login, logout } = require('../controller/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { doLoginValidators, doLoginValidationHandler } = require('../middlewares/login/loginValidators');
const { checkLogin, redirectLoggedIn } = require('../middlewares/common/checkLogin');

// router instance
const router = express.Router();

// local variables
const pageName = "Login";

// login page
router.get('/', decorateHtmlResponse(pageName), redirectLoggedIn, loginController);

// process login
router.post('/', decorateHtmlResponse(pageName), doLoginValidators, doLoginValidationHandler, login);

// logout
router.delete('/', logout);

module.exports = router;