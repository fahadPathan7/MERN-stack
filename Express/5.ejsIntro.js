/*
this is to learn how ejs works
*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // set the view engine to ejs
// this will look for ejs files in the views folder

app.get('/ejs', (req, res) => {
    res.render('ejsIntro'); // render the ejs file
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});