var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Pages = db.pages;

exports.retrievePage = function(req, res) {

    var body = req.body;
    var now = new Date();

    Pages.find({
      
    }, function (err, pages) {

        if (err) {
            console.log('Couldn\'t load any pages at ' + color.red(now) + ' with the website: ' + color.red(body.website) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding pages.'
            });
        }

        if (!pages) {
            console.log('not found em');
            res.status(409).json({
                'message': ' No pages currently created with the website: ' + body.website
            });
        }

        if (pages) {
            console.log('found em');
            console.log(pages);
            res.status(201).json({
                getPages : pages
            });
        }
    });

};