var express = require('express');
var router = express.Router();
var _ = require('underscore');
var color = require('cli-color')
var db = require('../../public/scripts/database');
var Users = db.users;