var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Pages = db.pages;

exports.createPage = function(req, res) {
    var body = req.body;
    var now = new Date();

    console.log("STUFF: " + body.name);

    Pages.findOne({

        'name': body.name

    }, function (err, page) {

        // If there's an error, log it and return to user
        if (err) {

            // Nice log message on your end, so that you can see what happened
            console.log('Couldn\'t create new page at ' + color.red(now) + ' by ' + color.red(body.name) + ' because of: ' + err);

            // send the error
            res.status(500).json({
                'message': 'Internal server error from creating the new page.'
            });
        }

        // If the page doesn't exist, create one
        if (!page) {
            console.log('Creating a new page at ' + color.green(now) + ' with the name: ' + color.green(body.name));

            // setup the new user
            var newPage = new Pages({
                name: body.name,
                content: 'No content'
            });

            // save the user to the database
            newPage.save(function (err, savedPage, numberAffected) {

                if (err) {
                    console.log('Problem saving the page ' + color.yellow(body.name) + ' due to ' + err);
                    res.status(500).json({
                        'message': 'Database error trying to create page.'
                    });
                }

                // Log success and send the filtered user back
                console.log('Successfully created new page: ' + color.green(body.name));

                res.status(201).json({
                    'message': 'Successfully created new page',
                    'client': _.omit(savedPage, 'page')
                });

            });
        }

        // If the user already exists...
        if (page) {
            res.status(409).json({
                'message': body.name + ' already exists!'
            });
        }
    });
};