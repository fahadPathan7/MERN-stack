/*
here I used two express app. one for app and another for admin.
and I wanted to see the difference between the two.
*/


const express = require('express'); // Import express

const app = express(); // Create an express app
const admin = express(); // Create another express app

app.use(express.json()); // Middleware for parsing JSON
admin.use(express.json()); // Middleware for parsing JSON

// apis for app
// Create a route for the home page.
// api: http://localhost:5000/home
app.get('/home', (req, res) => {
    res.send('This is Home Page with get request.'); // Send a response to the client
});

// Create a route for the home page. post request
// api: http://localhost:5000/home
app.post('/home', (req, res) => {
    console.log(req.body); // Log the request body to the console
    res.send('This is Home Page with post request.'); // Send a response to the client
});

// apis for admin
// Create a route for the home page.
// api: http://localhost:5000/admin/home
admin.get('/home', (req, res) => {
    res.send('This is Admin Home Page with get request.'); // Send a response to the client
});

// Create a route for the home page. post request
// api: http://localhost:5000/admin/home
admin.post('/home', (req, res) => {
    console.log(req.body); // Log the request body to the console
    res.send('This is Admin Home Page with post request.'); // Send a response to the client
});

// mount the app
app.use('/admin', admin); // this will mount the admin app to /admin

// start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000...');
}); // Listen on port 5000