var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Users = db.users;

exports.retrieveUser = function(req, res) {

    var body = req.body;
    // console.log('body: '+body);

    var now = new Date();

    Users.findOne({

        'email': body.email

    }, function (err, user) {

        if (err) {
            console.log('Couldn\'t load a user at ' + color.red(now) + ' with the email: ' + color.red(body.email) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding user.'
            });
        }

        if (!user) {
            console.log('not found em');
            res.status(409).json({
                'message': ' No user currently created with the email: ' + body.email
            });
        }

        if (user) {
            console.log('found em');
            console.log(user);
            if(body.password == user.password) {
                res.status(201).json({
                    getUser : user,
                    'message': 'Logged in! Password: '  + user.password + ' Email: ' + user.email
                });
            } else {
                res.status(409).json({
                    'message': body.password + ' is not the correct password!'
                });
            }            
        }
    });
};