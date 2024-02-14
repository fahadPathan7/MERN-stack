/*
this file is about to learn how to use params in routes
*/

const express = require('express');

const app = express();

/*
params are used to pass data to the route. it will be called before the route is called.
and we can pass data to the next middleware using next() function.
this param will be called when the route is called with the id parameter.
it does not matter if the route is /user/:id or /admin/:id, it will be called in both cases.
*/
app.param('id', (req, res, next, id) => {
    console.log('Params called!');
    const user = {
        ID: id,
        token: '123456'
    };
    req.userToken = user; // this is how we can pass data to next middleware
    next(); // this is to call next middleware
});

app.get('/user/:id', (req, res) => {
    console.log(req.userToken); // we can access the data from previous middleware
    res.send('User ID: ' + req.params.id);
});

app.get('/admin/:id', (req, res) => {
    console.log(req.userToken); // we can access the data from previous middleware
    res.send('Admin ID: ' + req.params.id);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});