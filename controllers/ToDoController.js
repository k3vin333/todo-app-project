// Define how data will be saved in mongodb Database
const ToDoSchema = require('../schemas/ToDoSchema')

// Async function since we will be working with the database
module.exports.getToDo = async (req, res) => {
    // Getting our ToDo's from database
    const toDo = await ToDoSchema.find()
    res.send(toDo)
}

// Create new todos into database
module.exports.saveToDo = async (req, res) => {
    // Saving our ToDo's to database

    const { text } = req.body
    
    ToDoSchema.create({text}).then((data) => {
        console.log("Added Successfully");
        console.log(data);
        res.send(data)
    })
}

// Update tasks in todo
module.exports.updateToDo = async (req, res) => {
    // Saving our ToDo's to database

    // Based on id, we will update things in database
    const {_id, text} = req.body
    ToDoSchema.findByIdAndUpdate(_id, {text}).then(()=> res.send("Updated Successfully")).catch((err)=> console.log(err))
}

// Deleting tasks in todo
module.exports.deleteToDo = async (req, res) => {
    // Saving our ToDo's to database

    // Based on id, we will update things in database
    const { _id } = req.body
    ToDoSchema.findByIdAndDelete(_id).then(()=> res.send("Deleted Successfully")).catch((err)=> console.log(err))
}
