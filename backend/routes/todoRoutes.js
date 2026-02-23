const express = require("express");
const router = express.Router();
const todoCOntroller = require("../controller/todocontroller");
const {protectedRoutes} = require("../middleware/auth");

router.use(protectedRoutes);

router.post("/", todoCOntroller.createTodo);
router.get("/", todoCOntroller.getTodos);
router.put("/:id", todoCOntroller.updateTodo);
router.delete("/:id", todoCOntroller.deleteTodo);

module.exports = router;