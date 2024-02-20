const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const checkLogin = require("../middlewares/checkLogin");

const todoSchema = require('../models/todoSchema');
const Todo = new mongoose.model('Todo', todoSchema);

// get all todos
router.get('/', checkLogin, (req, res) => {
    Todo.find()
    .select({_id: 0, __v: 0})
    .limit(5)
    .then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

// get a todo by id
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id).then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

// create a todo
router.post('/', (req, res) => {
    Todo.create(req.body).then((result) => {
        res.status(201).json(result);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

// post multiple todos
router.post('/multiple', (req, res) => {
    Todo.insertMany(req.body).
        then((result) => {
            res.status(201).json(result);
        }).catch((error) => {
            res.status(500).json({ error: error });
        });
});

// update a todo by id
router.put('/:id', (req, res) => {
    Todo.updateOne({ _id: req.params.id }, {
        $set: {
            status: "inactive"
        }
    }).then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

// delete a todo by id
router.delete('/:id', (req, res) => {
    Todo.deleteOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

module.exports = router; // export the router