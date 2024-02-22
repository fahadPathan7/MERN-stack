
// external imports
const express = require('express');

// internal imports
const { loginController } = require('../controller/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

// login page
router.get('/', decorateHtmlResponse("Login"), loginController);

module.exports = router;