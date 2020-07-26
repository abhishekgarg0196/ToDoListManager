const express = require('express');
const toDoitemController = require('../controllers/toDoitemController');
const router = express.Router();

router.get('/', toDoitemController.showTasks);
router.post('/addTask', toDoitemController.addTask);
router.get('/delete-task', toDoitemController.deleteTask);

// TO BE AVAILABE TO MAIN APP INDEX.JS
module.exports = router;
