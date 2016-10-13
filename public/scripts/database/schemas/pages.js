var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({
    name: { type: String, required: true, unique: true },
    website: { type: String, required: true },
    content: { type: String, required: true }
});

pageSchema.pre('save', function (next) {

    var page = this;
    next();
});

var Page = mongoose.model('Page', pageSchema);

module.exports = Page;