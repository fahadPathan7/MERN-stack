const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                res.status(401).json({ message: 'unauthorized' });
            } else {
                req.userData = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'unauthorized' });
    }
};

module.exports = checkLogin;