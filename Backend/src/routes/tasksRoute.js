const router =  require('express').Router();

const tasksController = require('../controllers/tasksController');

router.get("/", tasksController.getTasks);
router.get("/:id", tasksController.getTasksByID);
router.post("/", tasksController.addTask);
router.put("/:id", tasksController.editTask);
router.delete("/:id", tasksController.deleteTask);



module.exports = router;