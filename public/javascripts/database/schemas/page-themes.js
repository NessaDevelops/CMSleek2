var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageThemeSchema = new Schema({
    name: { type: String, required: true },
    path: { type: String, required: true }
});

pageThemeSchema.pre('save', function (next) {

    var pageTheme = this;
    next();
});

var PageTheme = mongoose.model('PageTheme', pageThemeSchema);

module.exports = PageTheme;