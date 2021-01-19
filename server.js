const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

// @Custom files
const env = require('./config/env');

// Custom APIs
const AuthorApi = require('./Api/Author/index');

// @express app initialization
const app = express();

// @Database connection
Mongoose.connect(env.dbCon, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const DB = Mongoose.connection;

// @DB Error
DB.on('error', () => {
    console.log('>Error occurred from the Database');
});

// @DB success
DB.once('open', () => {
    console.log(">Database connected succesfully");
});

// @middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/author', AuthorApi);

// @setup Port
const PORT = env.apiPort;

// @listen port
app.listen(PORT, () => {
    console.log('Magic Happens on Port: ' + PORT);
});


