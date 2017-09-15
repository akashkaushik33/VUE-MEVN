const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const config = require('../config/database');

router.post('/register' , (req, res, next) => {
    //console.log(req.body);
    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        number: req.body.number,
        dob: req.body.dob,
        password: req.body.password,
    });
    //console.log(newUser);
    const email = newUser.email;
    User.getUserByEmail(email , (err , user) => {
        if (err) {
            console.log(err);
        }
        if (user) {
            return res.json({Success: false , msg:'Failed to register : Email id is already registered '});
        } else {
            
            User.addUser(newUser , (err , user) => {
                //console.log('inside addUser', err, user);
                if(err) {
                    res.json({Success: false , msg: 'Failed to register user'});
                } else {
                    res.json({Success: true , msg: 'User is registered successfully'});
                }
                
            });
        }


    });
});

router.post('/authenticate' , (req, res, next) => {
    //res.send('Authenticate');
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email , (err , user) => {
        if (err) {
            console.log(err);
        }
        if (!user) {
            return res.json({Success: false , msg:'User not found'});
        }

        User.comparePassword(password , user.password , (err , isMatch) => {
            if (err) {
                console.log(err);
            }
            if (isMatch) {
                const token = jwt.sign(user , config.secret , {
                    expiresIn: 604800
                });
                res.json({
                    Success: true,
                    msg: "User found in database",
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({Success: false , msg:'Wrong Password'});
            }
        }) ;
    });
});

/*router.post('/validate' , (req, res, next) => {
    res.send('validate');
});
*/

router.get('/profile' , passport.authenticate('jwt' , {session:false}) , (req, res, next) => {
    //res.send('Profile');
    res.json({user: req.user});
});

module.exports = router;
