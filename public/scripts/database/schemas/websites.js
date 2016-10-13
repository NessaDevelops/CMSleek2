var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var websiteSchema = new Schema({
    name: { type: String, required: true, unique: true },
    owner: { type: String, required: true }
});

websiteSchema.pre('save', function (next) {

    var website = this;
    next();
});

var Website = mongoose.model('Website', websiteSchema);

module.exports = Website;