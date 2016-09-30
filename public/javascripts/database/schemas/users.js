var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passwordHash = require('password-hash');

// Define the User Schema
var userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false},
    lastName: { type: String, required: false},
    gender: { type: Boolean, required: false},
    dob: { type: Date, required: false},
    lastLoggedIn: { type: Date, required: true}

});

// A method that's called every time a user document is saved..
userSchema.pre('save', function (next) {

    var user = this;

    // If the password hasn't been modified, move along...
    if (!user.isModified('password')) {
        return next();
    }

    var hashedPassword = passwordHash.generate(user.password);

    user.password = hashedPassword;
    next();
});

// The primary user model
var User = mongoose.model('User', userSchema);

module.exports = User;