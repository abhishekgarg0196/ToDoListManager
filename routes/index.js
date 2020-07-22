const express = require('express');
const homeController = require('../controllers/home_controller');
const router = express.Router();


router.get('/', homeController.home);
router.use('/home', require('../routes/user'));

// TO BE AVAILABE TO MAIN APP INDEX.JS
module.exports = router;
