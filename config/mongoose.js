const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_app_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error occured while connecting to DB"));

function runningLog(){
    console.log("DB is running");
}

db.once('open', runningLog);