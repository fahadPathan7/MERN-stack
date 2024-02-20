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
dotenv.config();
app.use(express.json());

// database connection
mongoose.connect('mongodb+srv://' + process.env.USER + ':' + process.env.PASSWORD + '@cluster0.oxoqi6z.mongodb.net/todomanager?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected');
}).catch((error) => {
    console.log('error: ', error);
});

// routes
app.use('/todo', todoHandler);
app.use('/user', userHandler);

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

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
});