var express = require('express');
var router = express.Router();

var db = require('../public/scripts/database');
var Users = db.users;

exports.createUser = function(req, res) {
    var body = req.body;
    var now = new Date();

    console.log("PLEASE CREATE USER FUNC: " + body.role + " and maybe: " + body.email);

Users.findOne({

        'email': body.email

    }, function (err, user) {

        // If there's an error, log it and return to user
        if (err) {

            // Nice log message on your end, so that you can see what happened
            console.log('Couldn\'t create new user at ' + color.red(now) + ' by ' + color.red(body.email) + ' because of: ' + err);

            // send the error
            res.status(500).json({
                'message': 'Internal server error from signing up new user. Please contact support@yourproject.com.'
            });
        }

        // If the user doesn't exist, create one
        if (!user) {
            console.log('Creating a new user at ' + color.green(now) + ' with the email: ' + color.green(body.email));

            // setup the new user
            var newUser = new Users({
                username: '',
                email: body.email,
                role: body.role,
                password: '',
                verified: false
            });

            // save the user to the database
            newUser.save(function (err, savedUser, numberAffected) {

                if (err) {
                    console.log('Problem saving the user ' + color.yellow(body.email) + ' due to ' + err);
                    res.status(500).json({
                        'message': 'Database error trying to sign up.  Please contact support@yourproject.com.'
                    });
                }

                // Log success and send the filtered user back
                console.log('Successfully created new user: ' + color.green(body.email));

                res.status(201).json({
                    'message': 'Successfully created new user',
                    'client': _.omit(savedUser, 'password')
                });

            });
        }

        // If the user already exists...
        if (user) {
            res.status(409).json({
                'message': body.email + ' already exists!'
            });
        }
    });
};