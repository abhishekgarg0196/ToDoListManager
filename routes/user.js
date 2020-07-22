const express = require('express');
const userController = require('../controllers/user_controller');
const router = express.Router();


router.get('/profile', userController.profile);

// TO BE AVAILABE TO MAIN APP INDEX.JS
module.exports = router;
