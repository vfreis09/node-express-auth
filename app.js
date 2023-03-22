const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const bookRouter = require('./src/routes/router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const requireAuth = require('./src/middleware/authMiddleware');
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

app.get('/books', requireAuth, (req, res) => {
  res.send('books page!');
});

app.use(bookRouter);