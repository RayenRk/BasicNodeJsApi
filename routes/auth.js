const express = require('express');
const auth = express.Router();

auth.get('/login', (req, res) => {
    //console.log('it works');
    res.send('Login');
    
});

auth.get('/register', (req, res) => {
    res.sendFile(__dirname + '/msg.html');
});

module.exports = auth;