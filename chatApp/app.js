// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal imports
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');

const app = express();

dotenv.config();

// database connection
mongoose.connect('mongodb+srv://' + process.env.USER + ':' + process.env.PASSWORD + '@cluster0.oxoqi6z.mongodb.net/todomanager?retryWrites=true&w=majority')
.then(() => {
    console.log('database connected.');
}).catch((error) => {
    console.log('error: ', error);
});

// request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routes
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);


// server
app.listen(process.env.PORT, () => {
    console.log('server started at port: ' + process.env.PORT);
});