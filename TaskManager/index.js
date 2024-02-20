/*
this is my main file where I have created a server and
connected to the database. I have also created routes
for the todo and user. I have also created
a default error handling middleware.
*/

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const todoHandler = require('./routeHandler/todoHandler');
const userHandler = require('./routeHandler/userHandler');

const app = express();
app.use(express.json());

dotenv.config();

// routes
app.use('/todo', todoHandler);
app.use('/user', userHandler);

// database connection
mongoose.connect('mongodb+srv://' + process.env.USER + ':' + process.env.PASSWORD + '@cluster0.oxoqi6z.mongodb.net/todomanager?retryWrites=true&w=majority')
.then(() => {
    console.log('database connected.');
}).catch((error) => {
    console.log('error: ', error);
});

// default error handling middleware
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err); // pass the error to the next
        // error handling middleware
    }
    res.status(500).json({ error: err.message });
    // 500 Internal Server Error
}

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log('server is running on port: ' + process.env.PORT);
});