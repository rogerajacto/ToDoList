const usersDB = require('../db/usersDB');
const hashedPassword = require ("../services/encryptionService");
const validator = require ('validator');

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



    try{
        const {email, password,username} = req.body;

    function hasUpperCase(str) {
        return /[A-Z]/.test(str);
    }
    function hasSpecialCharacter(str) {
        return /[!@#$%&/()=?»«.,:|<>{}]/.test(str);
    }
    const UpperCase = hasUpperCase(password);
    const specialCharacter = hasSpecialCharacter(password);

    if (validator.isEmpty(email) || !validator.isEmail(email)) {
        res.status(400).json({
            message: "Invalid E-mail Format"
        })
    }
    
    else if(validator.isEmpty(password) || password.length < 5 || password.length > 14 ){
        res.status(400).json({
            message:"Invalid password, must have beetween 4 and 14 characters"
        })
    
    }

    else if (!UpperCase){

        res.status(400).json({
            message:"Invalid password,needs to have at least one uppercase"
        })
    }
    else if (!specialCharacter){

        res.status(400).json({
            message:"Invalid password,needs to have at least one special character"
        })
    }
    
    else{

        const hash = await hashedPassword.createHash(password);

        const userId = await usersDB.addUser(email, hash);


        if (userId === -1) {
            res.status(400).json({
                message: "Error on user registration, user already created!"
            })
            return;
        }
    
        res.status(400).json({
            email,
            userId,
            message: "New Account Created!"
        })
    }
        
    }
    catch (error) {
        res.status(500).send(error.message);
    }

}

module.exports = {
    getAllUsers,
    getUserdByID,
    addUser,
}