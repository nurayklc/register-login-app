const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect('/login')
  } catch (error) {
    const errors = validationResult(req)
    res.status(201).redirect('/register');
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
          // USER SESSION
          if(same){
            req.session.userID = user._id;
            res.status(200).json(user);
          }
          else {
            req.flash('error' , 'Your password is not correct!');
            res.status(400).redirect('/login')
          }
      });
    }
    else {
      req.flash('error' , 'User is not exist!');
      res.status(400).redirect('/login')
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
