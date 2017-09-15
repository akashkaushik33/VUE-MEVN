const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

var UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    dob: {
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User' , UserSchema);

module.exports.getUserById = function (id , callback) {
    User.findById(id , callback);
};

module.exports.getUserByEmail = function (email , callback) {
    var query = {email : email};
    User.findOne(query , callback);
}

module.exports.addUser = function (newUser , callback) {
    //console.log(newUser);
    bcrypt.genSalt(10 , (err , salt) => {
        //console.log('inside gensalt', err, salt);        
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            //console.log('inside hash', err, hash);        
            if (err) {console.log(err)};
            newUser.password = hash;
            newUser.save(callback)
                
        });
    });
};

module.exports.comparePassword = function (candidatePassword , hash , callback) {
    bcrypt.compare(candidatePassword , hash , (err , isMatch) => {
        if (err) {
            console.log(err);
        };
        callback(null , isMatch);

    });
};