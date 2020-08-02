const mongoose = require('mongoose');

const toDoItemSchema = new mongoose.Schema({
    description:{
        type: String,
        required : true
    },
    date:{
        type: String,
        required : true
    },
    category:{
        type: String,
        required : true
    }
});

const ToDoItem = mongoose.model('ToDoItem',toDoItemSchema );
module.exports = ToDoItem;