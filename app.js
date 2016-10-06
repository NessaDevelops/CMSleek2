var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/routes');
var createUser = require('./routes/users/createUser');
var deleteUser = require('./routes/users/deleteUser');
var updateUser = require('./routes/users/updateUser');
var retrieveUser = require('./routes/users/retrieveUser');
var retrieveAllUsers = require('./routes/users/retrieveAllUsers');


var db = require('./public/scripts/database/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

var urlencodedParser = bodyParser.urlencoded({ extended: true })

// ROUTES
app.get('/', routes.index);
app.get('/create-user', routes.createUser);
app.get('/pages', routes.pages);
app.get('/edit-page', routes.editPage);
app.get('/image-manger', routes.imageManager);
app.get('/page-themes', routes.pageThemes);
app.get('/themes', routes.themes);
app.get('/users', routes.users);
app.get('/content-management', routes.contentManagement);
app.post('/create-user', urlencodedParser, createUser.createUser);
app.post('/delete-user', urlencodedParser, deleteUser.deleteUser);
app.post('/update-user', urlencodedParser, updateUser.updateUser);
app.post('/retrieve-user', urlencodedParser, retrieveUser.retrieveUser);
app.post('/retrieve-all-users', urlencodedParser, retrieveAllUsers.retrieveAllUsers);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// app.post("/create-user", urlencodedParser, function(req, res) {
//     var role = req.body.role;
//     var email = req.body.email;

//     console.log("Role: " + role + ", Email: " + email);
// });

module.exports = app;