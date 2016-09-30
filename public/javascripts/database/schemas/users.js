var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passwordHash = require('password-hash');

// Define the User Schema
var userSchema = new Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, required: true },
    verified: { type: Boolean, required: true }
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