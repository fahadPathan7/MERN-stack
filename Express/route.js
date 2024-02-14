/*
this is to learn how to use app.route() to chain multiple route handlers to a single route.
*/

var express = require('express');
var app = express();

// this is to chain multiple route handlers to a single route.
// this will work same as the app.get(), app.post(), app.put() etc.
app.route('/book')
    .get((req, res) => {
        res.send('Get a random book');
    })
    .post((req, res) => {
        res.send('Add a book');
    })
    .put((req, res) => {
        res.send('Update the book');
    });


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});