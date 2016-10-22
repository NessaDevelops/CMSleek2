var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Pages = db.pages;

exports.updatePage = function(req, res) {

    var body = req.body;

    console.log(body.name);
    console.log(body.content);
    
    Pages.update({'name':body.name}, {
        'name':body.name,
        'content':body.content
    }, function (err, data) {
        if(err) {
        } else if (!data) {
        } else {
            return res.send(200, data);
        }
    });
};