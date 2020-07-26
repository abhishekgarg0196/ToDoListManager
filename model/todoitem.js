const mongoose = require('mongoose');

const toDoItemSchema = new mongoose.Schema({
    description:{
        type: String,
        required : true
    },
    category:{
        type:String
    },
    duedate:{
        type:String
    }
});

const ToDoItem = mongoose.model('ToDoItem',toDoItemSchema );
module.exports = ToDoItem;