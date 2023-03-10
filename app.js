const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const bookRouter = require('./src/routes/router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());

//Connect to database
const db = require('./src/config/db');

//Database connection test
db.authenticate()
  .then(() => app.listen(3000))
  .catch(err => console.log(`Error: ${err}`));

//Routes  
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books', (req, res) => {
  res.send('books page!');
});

app.use(bookRouter);

//Cookies
app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send('you got the cookies');
});

app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies.newUser);
  res.json(cookies);
});