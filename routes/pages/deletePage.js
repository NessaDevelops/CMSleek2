var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Pages = db.pages;

exports.deletePage = function(req, res) {

    var body = req.body;

    console.log(body);
    console.log(body.name);

    var now = new Date();

    Pages.findOneAndRemove({

        'name': body.name

    }, function (err, pages) {

        if (err) {
            console.log('Couldn\'t load any pages at ' + color.red(now) + ' for ' + color.red(body.name) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding pages.'
            });
        }

        if (!pages) {
            console.log('not found em');
            res.status(409).json({
                'message': body.website + ' has no pages currently created!'
            });
        }

        if (pages) {
            console.log('found em');
            res.status(201).json({
                'message': 'Page with the name: ' + body.name + ' is now deleted!'
            });
        }
    });

};