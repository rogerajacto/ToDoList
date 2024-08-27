const usersDB = require('../db/usersDB');

async function getAllUsers(req,res) {

    try {
        const users = await usersDB.getAllusers();

        if (users) {
            res.json(users);
    
        } else {
            res.status(404).sen('item not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
async function getUserdByID(req,res) {
    const id = req.params.id
    try {
        const users = await usersDB.getUserdByID(id);

        if (users) {
            res.json(users);
    
        } else {
            res.status(404).sen('item not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function addUser(req,res) {
    const {email, hashed_password,username} = req.body; 
    
    try {
        const users = await usersDB.addUser(email, hashed_password,username);

        if (users) {
            res.json(users);
    
        } else {
            res.status(404).sen('item not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAllUsers,
    getUserdByID,
    addUser,
}