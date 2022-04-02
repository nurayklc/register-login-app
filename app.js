const express = require('express')
const app = express()
const mongoose = require('./database/dbConnect');
const dotenv = require('dotenv').config()
const ejs = require('ejs');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at ${port} port`)
})