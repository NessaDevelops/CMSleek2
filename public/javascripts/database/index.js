/**
 * Our Database Interface
 */
var mongoose = require('mongoose');
var UserModel = require('./schemas/users');
var FileModel = require('./schemas/files');
var PageThemeModel = require('./schemas/page-themes');
var PageModel = require('./schemas/pages');
var ThemeModel = require('./schemas/themes');

// Connections
var usedDb = 'mongodb://<dbuser>:<dbpassword>@ds041546.mlab.com:41546/cmsleek';

mongoose.connect(usedDb);

// get an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
    console.log('Databsae Connection Successfully Opened at ' + usedDb);
});

// Open the connection
db.once('open', function callback () {
    console.log('Databsae Connection Successfully Opened at ' + usedDb);
});

exports.users = UserModel;
exports.files = FileModel;
exports.pageThemes = PageThemesModel;
exports.pages = PageModel;
exports.themes = ThemeModel;