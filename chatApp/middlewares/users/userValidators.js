// external imports
const { check, validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const fs = require('fs');

// add user
const addUserValidators = [
    check('name').isLength({ min: 1 }).withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid Email')
        .custom(async (value) => {
            const user = await User.findOne({ email:
                value
            });
            if (user) {
                throw createHttpError('Email already in use');
            }
            return true;
        }
        ),
    check('mobile').isMobilePhone('bn-BD', {
        strictMode: false
    }).withMessage('Invalid Bangladeshi Mobile Number')
        .custom(async (value) => {
            const user = await User.findOne({ mobile: value });
            if (user) {
                throw createHttpError('Mobile number already in use');
            }
            return true;
        }
        ),
    check('password').isLength({ min: 1 }).withMessage('Password is required')
        .isStrongPassword().withMessage('Password is not strong enough'),
];

const addUserValidationsHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            const filePath = `public/uploads/avatars/${filename}`;
            // delete the uploaded file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
        res.status(500).json({
            errors: mappedErrors,
        });
    };
}

module.exports = {
    addUserValidators,
    addUserValidationsHandler,
};