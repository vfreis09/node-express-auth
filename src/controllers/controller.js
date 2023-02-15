const express = require('express');
const db = require('../config/db');
const User = require('../models/User');

const signupGet = (req, res) => {

};

const signupPost = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  
  //Insert into table
  User.create(user)
    .then(data => res.redirect('/'))
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