const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const config   = require('../config/database');


// User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type:     String,
        required: true
    },
    lastName: {
        type:     String,
        required: true
    },
        username: {
        type:     String,
        required: true
    },
    email: {
        type:     String,
        required: true
    },
    phone: {
        type:     String,
        required: true
    },
    city: {
        type:     String,
        required: false
    },
    state: {
        type:     String,
        required: true
    },
    zip: {
        type:     String,
        required: true
    },
    specialty: {
        type:     String,
        required: true
    },
    experience: {
        type:     String,
        required: true
    },
    password: {
        type:     String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};
module.exports.getUserUserName = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.log(err);
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};



