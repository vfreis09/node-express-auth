const express = require('express');
const router = express.Router();
const bookController = require('../controllers/controller')

router.get('/signup', bookController.signupGet);

router.post('/signup', bookController.signupPost);

router.get('/login', bookController.loginGet);

router.post('/login', bookController.loginPost);

module.exports = router;