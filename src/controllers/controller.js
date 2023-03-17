const express = require('express');
const db = require('../config/db');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'mySecret', {
    expiresIn: maxAge
  })
};

const signupGet = (req, res) => {

};

const signupPost = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  
  //Insert into table
  User.create(user)
    .then(data => {
      const token = createToken(user.id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

const loginGet = (req, res) => {

};

const loginPost = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
};

module.exports = {
  signupGet,
  signupPost,
  loginGet,
  loginPost
};