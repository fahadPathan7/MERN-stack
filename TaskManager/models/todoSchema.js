const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive'], // enum is used to restrict the value of a field
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = todoSchema; // export the model