const express = require('express');
const user = require('./routes/user');


// Create express instnace
const app = express();

// Use API Routes example
app.use('/user', user);


// Routes examples
app.get('/', (req, res) => {
    res.send('Welcome Back!');
});

app.get('/template', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/middle', (req, res, next) => {
    //res.send('Request number 1')
    console.log('Request number 1')
    next()
}, (req, res, next) => {
    res.send('Request number 2')
})

app.get('/example1', (req, res) => {
    //res.redirect('template')
    //res.end('hello and Goodbye')
    res.status(200).send('All Good!')
    //res.render('index')
})

// Port configuration
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});