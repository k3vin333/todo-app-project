const mongoose = require('mongoose')

// Created schema for data, instructions that specify data has to include string
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema)