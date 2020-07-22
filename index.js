const express = require('express');
const app = express();

// By default websites run on port 80
const port = 8000;

// USE EXPRESS ROUTER
app.use("/", require("./routes"));
app.set('view engine', 'ejs');
app.set('view','./views');

app.listen(port, function(err){
    if(err){
        console.error(`Error occured while running the server : ${err} `);
        return;
    }
    console.log(`Server is running on port : ${port}`);
})