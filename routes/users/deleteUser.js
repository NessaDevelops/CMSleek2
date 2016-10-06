var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Users = db.users;

exports.deleteUser = function(req, res) {

    console.log('did we even come here');

    var body = req.body;

    console.log(body);

    var now = new Date();

    Users.findOneAndRemove({

        'email': body.email

    }, function (err, users) {

        if (err) {
            console.log('Couldn\'t load any users at ' + color.red(now) + ' for ' + color.red(body.email) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding users.'
            });
        }

        if (!users) {
            console.log('not found em');
            res.status(409).json({
                'message': body.owner + ' has no users currently created!'
            });
        }

        if (users) {
            console.log('found em');
            res.status(201).json({
                'message': 'User with the email: ' + body.email + ' is now deleted!'
            });
        }
    });

};