var express = require('express');
var router = express.Router();

exports.index = function(req, res) {
    res.render('index'); 
};

exports.createUser = function (req, res) {
    res.render('create-user');
};

exports.editPage = function(req, res) {
    res.render('edit-page');  
};

exports.imageManager = function (req, res) {
    res.render('image-manager');
};

exports.pageThemes = function(req, res) {
    res.render('page-themes'); 
};

exports.pages = function (req, res) {
    res.render('pages');
};

exports.themes = function(req, res) {
    res.render('themes'); 
};

exports.users = function (req, res) {
    res.render('users');
};

exports.contentManagement = function (req, res) {
    res.render('content-management');
}