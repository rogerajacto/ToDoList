const taksDB = require('../db/tasksDB');

async function getTasks(req,res) {
    try {
        const tasks = await taksDB.getAllTaks();

        if (tasks) {
            res.json(tasks);
        } 

        else {
            res.status(404).send("item not found")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getTasksByID(req,res) {

    const id =  req.params.id;
    try {
        const tasks = await taksDB.getTasksByID(id);

        if (tasks) {
            res.json(tasks);
        } 

        else {
            res.status(404).send("item not found")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function addTask(req,res) {

     const {title,description,status,experation_date} = req.body;
    try {
        const result = await taksDB.addTask(title,description,status,experation_date);

        const tasks = await taksDB.getTasksByID(result.insertId)

        if (tasks) {
            res.json(tasks);
        } 

        else {
            res.status(404).send("item not found")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
async function editTask(req,res) {

     const {title,description,status,experation_date} = req.body;
     const id = req.params.id;

    try {
        const tasks = await taksDB.editTask(title,description,status,experation_date,id);
    
        if (tasks) {
            res.json(tasks);
        } 

        else {
            res.status(404).send("item not found")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteTask(req,res) {

    const id =  req.params.id;

    try {

        const tasks = await taksDB.deleteTask(id)

        if (tasks) {
            res.json(tasks)
        } else {
            res.status(404).send("item not found")
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getTasks,
    getTasksByID,
    addTask,
    editTask,
    deleteTask
}