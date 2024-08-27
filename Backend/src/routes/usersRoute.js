const router =  require("express").Router();

const userController = require('../controllers/usersController')

router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserdByID);
router.post("/",userController.addUser);

module.exports = router