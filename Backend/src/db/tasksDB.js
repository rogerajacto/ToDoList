const { query } = require('express');
const connection = require('../db/connection');


async function getAllTaks() {
    const sql = "SELECT * FROM tasks";

    try {
        const[result] = await connection.promise().query(sql);

        return result;
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function getTasksByID(id) {
    
    const sql = "SELECT * FROM tasks where id = ?"

    try {
        const [result] = await connection.promise().query(sql,id);

        return result;
    
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }

}


async function addTask(title,description,status,experation_date) {
    
    const sql = "INSERT INTO tasks (title, description,status, experation_date) VALUES (?,?,?,?)";
    const params = [title,description,status,experation_date]

    try {
        const [result] = await connection.promise().query(sql,params);

        return result;
    
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }

}

async function editTask(title,description,status,experation_date, id) {
    
    const sql = "UPDATE tasks SET title = ?, description = ?,status=? , experation_date = ? WHERE id = ?";

    const params = [title,description,status,experation_date, id];

    try {
        const [result] = await connection.promise().query(sql,params);

        return result;
    
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }

}

async function deleteTask(id) {

    const sql = "DELETE from tasks WHERE id = ?"

    try {
        const [result] = await connection.promise().query(sql,id)

        return result;

    } catch (error) {
        throw new Error("Database Failure");
        
    }
    
}

module.exports = {
    getAllTaks,
    getTasksByID,
    addTask,
    editTask,
    deleteTask
}