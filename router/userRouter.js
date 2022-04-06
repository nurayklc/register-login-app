const express = require('express');
const router = express.Router();
const authController = require('../controller/authController')


router.route('/signup').post(authController.createUser);

router.route('/login').post(authController.loginUser);

module.exports = router;