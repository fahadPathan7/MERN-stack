/*
to learn about cookie-parser.
how to use cookie-parser and how to set and get cookies.
*/

const express = require('express');

const cookieParser = require('cookie-parser'); // require cookie-parser
const app = express();

app.use(cookieParser()); // use cookie-parser
app.use(express.json());

app.get('/setcookie', (req, res) => {
    res.cookie('username', 'Fahad'); // set cookie
    // set the cookie a expiration time
    res.cookie('isAuthenticated', true, { maxAge: 900000, httpOnly: true }); // maxAge is in milliseconds. it will expire after 15 minutes. 
    res.send('cookie is set');
});

app.get('/getcookie', (req, res) => {
    res.send(req.cookies); // get cookie
});


app.listen(5000, () => {
    console.log('server is running on port 5000');
});