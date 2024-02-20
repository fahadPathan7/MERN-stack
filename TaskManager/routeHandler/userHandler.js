const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/userSchema');
const router = express.Router();
const User = mongoose.model('User', UserSchema);

// Create a new user
router.post('/register', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    User.create({
        name: req.body.name,
        username: req.body.username,
        password: hashedPassword,
    }).then((result) => {
        res.status(201).json(result);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

// login
router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                // generate token
                const token = jwt.sign({
                    username: user.username,
                    userId: user._id
                }, process.env.JWT_secret, { expiresIn: '1h' });
                res.status(200).json({
                    message: 'login successful',
                    token: token
                });
            } else {
                res.status(401).json({ message: 'unauthorized' });
            }
        } else {
            res.status(401).json({ message: 'unauthorized' });
        }
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
});

module.exports = router;