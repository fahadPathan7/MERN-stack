const express = require('express'); // Import express
const app = express(); // Create an express app

app.use(express.json()); // Middleware for parsing JSON

// Create a route for the home page.
// api: http://localhost:5000/
app.get('/', (req, res) => {
    res.send('This is Home Page with get request.'); // Send a response to the client
});

// Create a route for the home page. post request
// api: http://localhost:5000
app.post('/', (req, res) => {
    console.log(req.body); // Log the request body to the console
    res.send('This is Home Page with post request.'); // Send a response to the client
});


// start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000...');
}); // Listen on port 5000

