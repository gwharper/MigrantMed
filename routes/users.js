const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const passport = require('passport');
const jwt     = require('jsonwebtoken');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName:  req.body.firstName,
        lastName:   req.body.lastName,
        username:   req.body.username,
        email:      req.body.email,
        phone:      req.body.phone,
        city:       req.body.city,
        state:      req.body.state,
        zip:        req.body.zip,
        specialty:  req.body.specialty,
        experience: req.body.experience,
        password:   req.body.password
    });

    User.addUser(newUser, (err, user) => {
      if(err) {
          res.json({success: false, message: 'User could not be created'});
      } else {
          res.json({success: true, message: 'User created successfully!'});
      }
    })
});

// Authenticate
router.post('/auth', (req, res, next) => {
    res.send('Auth');
});

// Protected Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});


module.exports = router;