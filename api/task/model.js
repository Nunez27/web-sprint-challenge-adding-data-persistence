// build your `Task` model here
const db = require("../../data/dbConfig.js");

function findTasks(){
    return db('tasks')
}

function getTaskByIdea(id){
    return db('tasks')
    .where({ task_id: Number(id) }).first()
}

function addATask(task){
    return db('task')
    .insert(task, 'task_id')
    .then(id => ({ task_id: id[0] }));
}


module.exports = {
    findTasks,
    getTaskByIdea,
    addATask
} 