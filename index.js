const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
// By default websites run on port 80
const port = 8000;
const app = express();

app.set('view engine' ,'ejs');
app.set('views' ,path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// USE EXPRESS ROUTER
app.use('/', require("./routes"));

app.listen(port, function(err){
    if(err){
        console.error(`Error occured while running the server : ${err} `);
        return;
    }
    console.log(`Server is running on port : ${port}`);
})