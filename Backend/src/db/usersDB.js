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

async function addUser(email, hashed_password,username) {
    const sql = "INSERT into users (email, hashed_password,username) VALUES (?,?,?)";
    try {
        const [result] = await connection.promise().query(sql,[email, hashed_password,username])

        return result;

    } catch (error) {
        console.log(error);
        throw new Error ('Database Failure')
    }
}


module.exports = {
    getAllusers,
    getUserdByID,
    addUser
}