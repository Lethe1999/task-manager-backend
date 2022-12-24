const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Create a task
router.post("/", taskController.createTask);

// Read tasks
router.get("/", taskController.getTasks);
// Read a task
router.get("/:id", taskController.getTask);

// Update a task
router.put("/:id", taskController.updateTask);
router.patch("/:id", taskController.updateTask);

// Delete a task
router.delete("/:id", taskController.deleteTask);


module.exports = router;