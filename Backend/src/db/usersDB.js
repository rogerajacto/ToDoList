const connection = require('../db/connection');

async function getAllusers() {
    const sql = "SELECT * from users";
    try {
        const [result] = await connection.promise().query(sql)

        return result;

    } catch (error) {
        console.log(error);
        throw new Error ('Database Failure')
    }
}

async function getUserdByID(id) {
    const sql = "SELECT * FROM users WHERE id = ?";
    try {
        const [result] = await connection.promise().query(sql,id)

        return result;

    } catch (error) {
        console.log(error);
        throw new Error ('Database Failure')
    }
}

async function addUser(email, hash ,username) {
    const sql = "INSERT into users (email, password,username) VALUES (?,?,?)";
    try {
        const [result] = await connection.promise().query(sql,[email, hash,username])

        return result[0].insertId;

    } catch (error) {
        console.log( error);
        return -1;
    }
}




module.exports = {
    getAllusers,
    getUserdByID,
    addUser
}