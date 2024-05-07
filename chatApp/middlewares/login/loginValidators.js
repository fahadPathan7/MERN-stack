// exteranl imports
const { check } = require('express-validator');
const { validationResult } = require('express-validator');

const doLoginValidators = [
    check('username').notEmpty().withMessage('Username can not be empty'),
    check('password').notEmpty().withMessage('Password can not be empty'),
];

const doLoginValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        res.render('index', {
            data: {
                username: req.body.username,
            },
            errors: mappedErrors,
            // these are same as res.locals.errors = mappedErrors;
            // and will be available in the view file
        });
    }
};

module.exports = {
    doLoginValidators,
    doLoginValidationHandler,
};