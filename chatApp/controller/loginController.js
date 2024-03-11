// external imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// internal imports
const User = require('../models/people');

// login page
function loginController(req, res) {
    res.render('index');
}

// do login
function login(req, res) {
    try {
        const user = User.findOne({
            $or: [{ email: req.body.username }, { mobile: req.body.username }],
        });

        if (user) {
            const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

            if (isValidPassword) {
                const userObj = {
                    username: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    role: user.role,
                };

                // generate token
                const token = jwt.sign(userObj, process.env.JWT_SECRET, {
                    expiresIn: '72h',
                });

                // set token to cookie
                res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 3, httpOnly: true, signed: true });
                // signed is used to verify the cookie is not tempered

                res.locals.loggedInUser = userObj;
                // this is to set the user object to res.locals.loggedInUser so that we can access this user object in other middlewares and controllers

                // res.json({
                //     status: 'success',
                //     message: 'User logged in successfully',
                //     data: userObj,
                // });

                res.redirect('inbox');
            } else {
                throw createError(400, 'Login failed! Please check your credentials');
            }
        } else {
            throw createError(400, 'Login failed! Please check your credentials');
        }
    } catch (error) {
        res.render('index', {
            data: {
                username: req.body.username,
            },
            errors: {
                common: {
                    msg: 'Login failed',
                },
            },
        });
    }
}

// do logout
function logout(req, res) {
    res.clearCookie('token');
    res.json({
        status: 'success',
        message: 'User logged out successfully',
    });
}

module.exports = {
    loginController,
    login,
    logout,
}