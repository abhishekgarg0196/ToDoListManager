
const ToDoItem = require('../model/todoitem');

module.exports.addTask = function(req, res){
    ToDoItem.create(req.body, function(err, todoItem){
        if(err){
            console.error(`error occured while creating a new to do task:  ${err}`);
            return;
        }
        return res.redirect('back');
    })

}

module.exports.deleteTask = function(req, res){
    console.log(req.body);
    let keysCount = Object.keys(req.body).length;
    console.log(`Count of key ${keysCount}`);

    for(let i = 0 ; i < keysCount ; i++){
        ToDoItem.findByIdAndDelete(Object.keys(req.body)[i],function(err){
            if(err){
                console.error(`Error occured while deleting the object from db:  ${err}`);
                return;
            }
        });
    }
    return res.redirect('back');
}

module.exports.showTasks = function(req, res){

    ToDoItem.find({}, function(err, ToDoItems){
        if(err){
            console.log('error countered while fetching the data from db', err);
            return;
        }
        return res.render('home',
        {
            ToDoItem_list : ToDoItems,
            tittle:"My Todo App"
        });
    })
}