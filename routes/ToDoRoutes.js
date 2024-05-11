const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

// Get list of TODos from database
router.get('/', getToDo)

// Save to do into database (creating new = post)
router.post('/save', saveToDo)

// Updating to do into database (creating new = post)
router.post('/update', updateToDo)

// Delete todo from database (creating new = post)
router.post('/delete', deleteToDo)

module.exports = router;