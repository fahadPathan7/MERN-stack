/*
this is to learn about how middleware works and
how to create error handling middleware.
*/

const express = require('express');
const app = express();

app.use(express.json());

// this is a direct middleware
// this middleware will run for every request
app.use((req, res, next) => {
    console.log('middleware is working');
    next();
});

// this is a middleware function
// this middleware function will run for every request
// this middleware function will run after the direct middleware
// as the direct middleware is placed before this middleware function
const middleware = (req, res, next) => {
    console.log('middleware function is working');
    next();
};

app.use(middleware); // use middleware function

app.get('/home', (req, res) => {
    res.send('home page');
});

// we can set a middleware function for a specific route
// this middleware function will run for the '/about' route
const middleware2 = (req, res, next) => {
    console.log('middleware2 is working');
    next();
};

// setting middleware2 for the '/about' route
app.get('/about', middleware2, (req, res) => {
    res.json({ message: 'about page' }); // send json response
});

// using error handling middleware
app.get('/error', (req, res) => {
    throw new Error('error');
});

// error handling middleware
// this middleware function will run for every error
const errorMiddleware = (err, req, res, next) => {
    console.log('error middleware is working');
    res.status(500).json({ error: err.message });
    res.end(); // end the response. if we don't end the response, the server will keep waiting for the response.
};

app.use(errorMiddleware); // use error middleware

app.listen(5000, () => {
    console.log('server is running on port 5000');
});