/**
 * Our Database Interface
 */
var mongoose = require('mongoose');
var UserModel = require('./schemas/users');
var BucketlistModel = require('./schemas/bucketlists');
var GoalModel = require('./schemas/goals');
var MemoryModel = require('./schemas/memories');
var StaticGoalModel = require('./schemas/staticGoals');
var AchievementModel = require('./schemas/achievements');

// Connections
var developmentDb = 'mongodb://localhost/test';
var productionDb = 'urlToYourProductionMongoDb';
var usedDb;

// If we're in development...
if (process.env.NODE_ENV === 'development') {
    // set our database to the development one
    usedDb = developmentDb;
    // connect to it via mongoose
    mongoose.connect(usedDb);
}

// If we're in production...
if (process.env.NODE_ENV === 'production') {
    // set our database to the development one
    usedDb = productionDb;
    // connect to it via mongoose
    mongoose.connect(usedDb);
}

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
exports.bucketlists = BucketlistModel;
exports.goals = GoalModel;
exports.memories = MemoryModel;
exports.staticGoals = StaticGoalModel;
exports.achievements = AchievementModel;