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

module.exports = {
    getTasks,
}