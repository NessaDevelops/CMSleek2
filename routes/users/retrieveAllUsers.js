var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Users = db.users;

exports.retrieveAllUsers = function(req, res) {

    var body = req.body;
    // console.log('body: '+body);

    var now = new Date();

    Users.find({

    }, function (err, users) {

        if (err) {
            console.log('Couldn\'t load any users at ' + color.red(now) + ' with the email: ' + color.red(body.email) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding users.'
            });
        }

        if (!users) {
            console.log('not found em');
            res.status(409).json({
                'message': ' No users currently created with the email: ' + body.email
            });
        }

        if (users) {
            console.log('found em');
            console.log(users);
            res.status(201).json({
                getUsers : users
            });
        }
    });

};