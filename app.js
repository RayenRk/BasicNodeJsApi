const express = require('express');
const user = require('./routes/user');
const auth = require('./routes/auth');
const post = require('./routes/post');

app.use(express.json())

// add bodyParser
// app.use(express.json());

// Create express instnace
const app = express();

// Use API Routes example
app.use('/user', user);
app.use('/auth', auth);
app.use('/post', post);

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

app.get('/node', (req, res) => {
    console.log("test1", req.query.name) 
    console.log("test2", req.query.lastname)
})

app.get('/node/:name', (req, res) => {
    console.log(req.params.name)
})


// Port configuration
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
}); 