// external imports
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

// internal imports
const User = require('../models/people');


// users page
function getUsers(req, res, next) {
    User.find()
        .then((users) => {
            res.render('users', {
                users: users,
            });
        })
        .catch((err) => {
            next(err);
        });
}

// add user
function addUser(req, res, next) {
    let newUser;
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    if (req.files.length > 0) {
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashedPassword,
        });
    } else {
        newUser = new User({
            ...req.body,
            password: hashedPassword,
        });
    }

    newUser.save()
        .then(() => {
            res.status(201).json({
                message: 'User added successfully!',
            });
        })
        .catch((err) => {
            res.status(500).json({
                errors: {
                    common: {
                        msg: err.message,
                    },
                },
            });
        });
}

// remove user
function removeUser(req, res, next) {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            // check if user has avatar
            if (req.body.avatar) {
                // delete avatar
                fs.unlink(path.join(__dirname, `../public/uploads/avatars/${req.body.avatar}`), (err) => {
                    if (err) {
                        console.log('error: ', err);
                    }
                });
            }
            res.status(200).json({
                message: 'User removed successfully!',
            });
        }
        )
        .catch((err) => {
            res.status(500).json({
                errors: {
                    common: {
                        msg: err.message,
                    },
                },
            });
        });
}

module.exports = {
    getUsers,
    addUser,
    removeUser,
}