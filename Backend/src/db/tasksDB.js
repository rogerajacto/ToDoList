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

module.exports = {
    getAllTaks
}