var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET add user page. */
router.get('/create-user', function(req, res, next) {
  res.render('create-user', { title: 'Express' });
});

/* GET users page. */
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

/* GET themes page. */
router.get('/themes', function(req, res, next) {
  res.render('themes', { title: 'Express' });
});

/* GET pages page. */
router.get('/pages', function(req, res, next) {
  res.render('pages', { title: 'Express' });
});

/* GET page themes page. */
router.get('/page-themes', function(req, res, next) {
  res.render('page-themes', { title: 'Express' });
});

/* GET page edit page page. */
router.get('/edit-page', function(req, res, next) {
  res.render('edit-page', { title: 'Express' });
});

/* GET page image manager page. */
router.get('/image-manager', function(req, res, next) {
  res.render('image-manager', { title: 'Express' });
});

module.exports = router;
